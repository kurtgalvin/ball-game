const WIDTH = 512
const HEIGHT = 197

class FireBall {
  constructor(context, colour, startX, startY, frameMultiple) {
    this.context = context
    this.sheet = new Image();
    this.sheet.src = `sprites/fireballoga/${colour}/spritesheet-512px-by-197px-per-frame.png`;
    this.x = startX;
    this.y = startY;
    this.frameMultiple = frameMultiple

    this.spriteLocations = [[0, 0], [WIDTH, 0], [WIDTH*2, 0], [0, HEIGHT], [WIDTH, HEIGHT], [WIDTH*2, HEIGHT]]
    this.spriteIndex = 0
    this.frameCount = 0
  }

  draw() {
    const sX = this.spriteLocations[this.spriteIndex][0]
    const sY = this.spriteLocations[this.spriteIndex][1]
    this.context.drawImage(this.sheet, sX, sY, WIDTH, HEIGHT, this.x, this.y, WIDTH, HEIGHT);

    if(this.frameCount * this.frameMultiple >= 1) {
      this.spriteIndex ++
      this.frameCount = 1
    } else {
      this.frameCount ++
    }
    if(this.spriteIndex >= this.spriteLocations.length) {
      this.spriteIndex = 0
    } 
  }

  move(x, y) {
    this.x = x - 30
    this.y = y - 135
  }
}