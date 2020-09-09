import p5 from 'p5'
import MatrixWorker from './Matrix.worker'

const POINT_DIAMETER = 10

export default class ImageScanner {
  setup = (container, image) => {
    this.terminate()

    this.container = container

    this.x = container.offsetWidth / 2
    this.y = container.offsetHeight / 2
    this.scale = 1

    this.mousePressed = false

    this.sketch = (p) => {
      if (!image) return

      p.preload = () => {
        this.background = p.loadImage(image)
      }

      p.setup = () => {
        const myCanvas = p.createCanvas(
          container.offsetWidth,
          container.offsetHeight
        )

        myCanvas.elt.addEventListener('contextmenu', (e) => e.preventDefault())

        myCanvas.parent(container)
        p.imageMode(p.CENTER)
      }

      p.draw = () => {
        const imgWidth = this.background.width * this.scale
        const imgHeight = this.background.height * this.scale

        p.clear()
        p.image(this.background, this.x, this.y, imgWidth, imgHeight)

        this.points.forEach((point) => {
          const { x: mx, y: my } = this.mapPointToCanvas(point)

          p.noStroke()
          p.fill('#e84a5f')
          p.rectMode(p.CENTER)
          p.rect(mx, my, POINT_DIAMETER, POINT_DIAMETER)
        })

        // TODO: extract 4
        if (this.points.length === 4) {
          const {
            topLeft,
            topRight,
            bottomLeft,
            bottomRight
          } = this.getCornerPoints()

          const p1 = this.mapPointToCanvas(topLeft)
          const p2 = this.mapPointToCanvas(topRight)
          const p3 = this.mapPointToCanvas(bottomLeft)
          const p4 = this.mapPointToCanvas(bottomRight)

          p.stroke('#e84a5f99')
          p.strokeWeight(8)
          this.drawLine(p, p1, p3)
          this.drawLine(p, p2, p4)
          this.drawLine(p, p1, p2)
          this.drawLine(p, p3, p4)
        }
      }

      p.mousePressed = () => {
        if (
          p.mouseX < 0 ||
          p.mouseX > p.width ||
          p.mouseY < 0 ||
          p.mouseY > p.height
        )
          return
        const x = (p.mouseX - this.x) / this.scale + this.background.width / 2
        const y = (p.mouseY - this.y) / this.scale + this.background.height / 2

        const pointIndex = this.points.findIndex(
          ({ x: px, y: py }) =>
            x >= px - POINT_DIAMETER / 2 &&
            x <= px + POINT_DIAMETER / 2 &&
            y >= py - POINT_DIAMETER / 2 &&
            y <= py + POINT_DIAMETER / 2
        )
        if (p.mouseButton === p.RIGHT && pointIndex !== -1) {
          this.reactRemovePoint(pointIndex)
        } else if (p.mouseButton === p.LEFT && this.isPinning) {
          if (
            x >= 0 &&
            x <= this.background.width &&
            y >= 0 &&
            y <= this.background.height
          ) {
            this.reactAddPoint(x, y)
          }
        }

        this.startX = p.mouseX
        this.startY = p.mouseY

        this.mousePressed = true
      }

      p.mouseReleased = () => {
        this.mousePressed = false
      }

      p.mouseDragged = () => {
        if (this.isPinning || !this.mousePressed) return
        if (
          p.mouseX < 0 ||
          p.mouseX > p.width ||
          p.mouseY < 0 ||
          p.mouseY > p.height
        )
          return
        const diffX = this.startX - p.mouseX
        const diffY = this.startY - p.mouseY

        this.x -= diffX
        this.y -= diffY

        this.startX = p.mouseX
        this.startY = p.mouseY
      }

      p.mouseWheel = (e) => {
        if (this.isPinning) return
        if (
          p.mouseX < 0 ||
          p.mouseX > p.width ||
          p.mouseY < 0 ||
          p.mouseY > p.height
        )
          return
        const { delta } = e
        this.scale += delta / 1000
      }

      p.windowResized = () => {
        p.resizeCanvas(container.offsetWidth, container.offsetHeight)
      }
    }

    this.p5instance = new p5(this.sketch)
  }

  setPinning = (isPinning) => {
    if (!this.p5instance) return

    this.container.style.cursor = isPinning ? 'crosshair' : 'grab'
    this.isPinning = isPinning
  }

  setAddPoint = (func) => (this.reactAddPoint = func)

  setRemovePoint = (func) => (this.reactRemovePoint = func)

  setPoints = (points) => (this.points = points)

  getCornerPoints = () => {
    const topLeft = this.points
      .map((p) => ({
        d: Math.sqrt(p.x ** 2 + p.y ** 2),
        p
      }))
      .sort((a, b) => a.d - b.d)[0].p
    const topRight = this.points
      .map((p) => ({
        d: Math.sqrt((p.x - this.background.width) ** 2 + p.y ** 2),
        p
      }))
      .sort((a, b) => a.d - b.d)[0].p
    const bottomLeft = this.points
      .map((p) => ({
        d: Math.sqrt(p.x ** 2 + (p.y - this.background.height) ** 2),
        p
      }))
      .sort((a, b) => a.d - b.d)[0].p
    const bottomRight = this.points
      .map((p) => ({
        d: Math.sqrt(
          (p.x - this.background.width) ** 2 +
            (p.y - this.background.height) ** 2
        ),
        p
      }))
      .sort((a, b) => a.d - b.d)[0].p

    return { topLeft, topRight, bottomRight, bottomLeft }
  }

  project = async () => {
    // const sortedPoints = this.points.sort(function (a, b) {
    //   if (a.y === b.y) return a.x - b.x
    //   return a.y - b.y
    // })
    let matrix, width, height

    await new Promise((resolve) => {
      const matrixWorker = new MatrixWorker()

      matrixWorker.postMessage({
        points: this.getCornerPoints()
      })

      matrixWorker.onmessage = (e) => {
        matrix = e.data.matrix
        width = e.data.width
        height = e.data.height
        resolve()
      }
    })

    const { coeffsInv } = matrix

    this.background.loadPixels()
    const img = this.p5instance.createImage(
      Math.floor(width),
      Math.floor(height)
    )
    img.loadPixels()

    for (let i = 0; i < img.width; i++) {
      for (let j = 0; j < img.height; j++) {
        const srcP = this.transformInverse(i, j, coeffsInv)
        const color = this.background.get(
          Math.floor(srcP.x),
          Math.floor(srcP.y)
        )
        img.set(i, j, color)
      }
    }

    img.updatePixels()

    return img
  }

  transformInverse = (x, y, coeffsInv) => {
    var coordinates = {}
    coordinates.x =
      (coeffsInv[0] * x + coeffsInv[1] * y + coeffsInv[2]) /
      (coeffsInv[6] * x + coeffsInv[7] * y + 1)
    coordinates.y =
      (coeffsInv[3] * x + coeffsInv[4] * y + coeffsInv[5]) /
      (coeffsInv[6] * x + coeffsInv[7] * y + 1)
    return coordinates
  }

  drawLine = (p, p1, p2) => {
    p.line(p1.x, p1.y, p2.x, p2.y)
  }

  mapPointToCanvas = (p) => {
    return {
      x: this.x + p.x * this.scale - (this.background.width * this.scale) / 2,
      y: this.y + p.y * this.scale - (this.background.height * this.scale) / 2
    }
  }

  terminate = () => {
    if (this.p5instance) {
      this.p5instance.remove()
      this.p5instance = null
    }
  }

  get enabled() {
    return !!this.p5instance
  }
}
