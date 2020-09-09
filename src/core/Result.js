import p5 from 'p5'

export default class Result {
  setup = (container, image) => {
    this.terminate()

    this.x = 0
    this.y = 0
    this.scale = 1
    this.background = image

    this.mousePressed = false

    this.sketch = (p) => {
      if (!image) return

      this.background = image

      p.setup = () => {
        const myCanvas = p.createCanvas(
          container.offsetWidth,
          container.offsetHeight,
          p.WEBGL
        )

        myCanvas.parent(container)
        p.imageMode(p.CENTER)
        p.noFill()
      }

      p.draw = () => {
        if (!this.background) return

        p.clear()
        p.image(
          this.background,
          this.x,
          this.y,
          this.background.width * this.scale,
          this.background.height * this.scale
        )
      }

      p.mousePressed = () => {
        if (
          p.mouseX < 0 ||
          p.mouseX > p.width ||
          p.mouseY < 0 ||
          p.mouseY > p.height
        )
          return

        this.startX = p.mouseX
        this.startY = p.mouseY

        this.mousePressed = true
      }

      p.mouseReleased = () => {
        this.mousePressed = false
      }

      p.mouseDragged = () => {
        if (!this.mousePressed) return
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

  terminate = () => {
    if (this.p5instance) {
      this.p5instance.remove()
    }
  }
}
