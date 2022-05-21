export class Bullet {
  public x: number = 0
  public y: number = 0
  public speed: number = 5
  public border: number = 0
  public onDestroy: any
  public width: number = 0
  public height: number = 0

  constructor() {}

  move() {
    this.y -= this.speed

    if (this.y <= this.border) {
      this.onDestroy && this.onDestroy()
    }
  }
}
