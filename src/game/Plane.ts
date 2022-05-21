import { Bullet } from './Bullet'

export interface Plane {
  bullets: Bullet[]
  x: number
  y: number
  speed: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
  attack: () => void
  run: () => void
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
}

export function setupPlane(plane, bullets: Bullet[], options?): Plane {
  plane.bullets = bullets

  Object.assign(plane, defaultOptions, options)

  initMove(plane)
  initRun(plane, bullets)
  initAttack(plane, bullets)

  return plane
}

function initAttack(plane: Plane, bullets: Bullet[]) {
  plane.attack = function attack() {
    const bullet = new Bullet()

    bullet.x = plane.x + 12.5 // 居中修正
    bullet.y = plane.y - 20

    bullet.onDestroy = () => {
      const index = bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }

    bullets.push(bullet)
  }
}

function initRun(plane: Plane, bullets: Bullet[]) {
  plane.run = function run() {
    bullets.forEach(bullet => {
      bullet.move()
    })
  }
}

function initMove(plane: Plane) {
  plane.moveDown = function moveDown() {
    plane.y += plane.speed
  }

  plane.moveUp = function moveUp() {
    plane.y -= plane.speed
  }

  plane.moveLeft = function moveLeft() {
    plane.x -= plane.speed
  }

  plane.moveRight = function moveRight() {
    plane.x += plane.speed
  }
}
