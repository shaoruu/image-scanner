import p5 from 'p5'
import { inv } from 'mathjs'
import { Matrix } from 'gauss-jordan'

const POINT_DIAMETER = 10

const TARGET_POINTS = [
  { x: 0, y: 0 },
  { x: 0, y: 500 },
  { x: 500, y: 0 },
  { x: 500, y: 500 }
]

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
            this.x + x * this.scale - imgWidth / 2,
            this.y + y * this.scale - imgHeight / 2,
            POINT_DIAMETER * this.scale,
            POINT_DIAMETER * this.scale
          )
        })
      }

      p.mousePressed = () => {
        const x = (p.mouseX - this.x) / this.scale + this.background.width / 2
        const y = (p.mouseY - this.y) / this.scale + this.background.height / 2

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

  project = () => {
    const sortedPoints = this.points.sort(function (a, b) {
      if (a.y === b.y) return a.x - b.x
      return a.y - b.y
    })

    const a1 = []
    const a2 = []
    const b1 = []
    const b2 = []

    for (let i = 0; i < sortedPoints.length; i++) {
      const s = sortedPoints[i]
      const t = TARGET_POINTS[i]

      a1.push([s.x, s.y, 1, 0, 0, 0, -s.x * t.x, -s.y * t.x])
      a2.push([0, 0, 0, s.x, s.y, 1, -s.x * t.y, -s.y * t.y])

      b1.push(t.x)
      b2.push(t.y)
    }

    const aA = a1.concat(a2)
    const bA = b1.concat(b2)

    const inverseA = inv(aA)
    const invAMatrix = Matrix.fromRationalArray(inverseA)
    const bMatrix = Matrix.fromRationalArray(bA.map((n) => [n]))

    const values = invAMatrix.multiply(bMatrix).values.flat()

    const [a, b, c, d, e, f, g, h] = values
    const i = 1

    const transformMatrix = Matrix.fromRationalArray([
      [e * i - f * h, c * h - b * i, b * f - c * e],
      [f * g - d * i, a * i - c * g, c * d - a * f],
      [d * h - e * g, b * g - a * h, a * e - b * d]
    ])

    // for (let i = 0; i < result.width; i++) {
    //   for (let j = 0; j < result.height; j++) {
    //     result.set(i, j, )
    //   }
    // }

    // const { x, y } = sortedPoints[0]
    const x = 0
    const y = 0
    console.log(sortedPoints[0])
    console.log(x, y)
    const tempMat = Matrix.fromRationalArray([[x], [y], [1]])
    console.log(transformMatrix.values)
    console.log(transformMatrix.multiply(tempMat).values)
  }

  terminate = () => {
    if (this.p5instance) {
      this.p5instance.remove()
    }
  }

  get enabled() {
    return !!this.p5instance
  }
}
