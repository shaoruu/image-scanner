import p5 from 'p5'

const POINT_DIAMETER = 10

export default class ImageScanner {
  setup = (container, image, addPoint) => {
    this.terminate()

    this.container = container

    this.x = container.offsetWidth / 2
    this.y = container.offsetHeight / 2
    this.scale = 1

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

        this.points.forEach(({ x, y }) => {
          p.noStroke()
          p.fill('#e84a5f')
          p.rectMode(p.CENTER)
          p.rect(
            this.x + x * this.scale,
            this.y + y * this.scale,
            POINT_DIAMETER * this.scale,
            POINT_DIAMETER * this.scale
          )
        })
      }

      p.mousePressed = () => {
        const x = p.mouseX - this.x
        const y = p.mouseY - this.y

        const pointIndex = this.points.findIndex(
          ({ x: px, y: py }) =>
            x >= px - (POINT_DIAMETER * this.scale) / 2 &&
            x <= px + (POINT_DIAMETER * this.scale) / 2 &&
            y >= py - (POINT_DIAMETER * this.scale) / 2 &&
            y <= py + (POINT_DIAMETER * this.scale) / 2
        )
        if (p.mouseButton === p.RIGHT && pointIndex !== -1) {
          this.reactRemovePoint(pointIndex)
        } else if (p.mouseButton === p.LEFT && this.isPinning) {
          if (
            p.mouseX >= this.x - (this.background.width * this.scale) / 2 &&
            p.mouseX <= this.x + (this.background.width * this.scale) / 2 &&
            p.mouseY >= this.y - (this.background.height * this.scale) / 2 &&
            p.mouseY <= this.y + (this.background.height * this.scale) / 2
          ) {
            this.reactAddPoint(x / this.scale, y / this.scale)
          }
        }

        this.startX = p.mouseX
        this.startY = p.mouseY
      }

      p.mouseDragged = () => {
        if (this.isPinning) return
        if (p.mouseX > p.width || p.mouseY > p.height) return

        const diffX = this.startX - p.mouseX
        const diffY = this.startY - p.mouseY

        this.x -= diffX
        this.y -= diffY

        this.startX = p.mouseX
        this.startY = p.mouseY
      }

      p.mouseWheel = (e) => {
        if (this.isPinning) return
        if (p.mouseX > p.width || p.mouseY > p.height) return

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

  terminate = () => {
    if (this.p5instance) {
      this.p5instance.remove()
    }
  }

  get enabled() {
    return !!this.p5instance
  }
}
