import { expect, it, describe, vi } from 'vitest'
import { Bullet } from './Bullet'
import { setupPlane } from './Plane'

describe('Bullet', () => {
  it('move', () => {
    const bullet = new Bullet()
    bullet.y = 1
    bullet.speed = 1

    bullet.move()

    expect(bullet.y).toBe(0)
  })

  it('超过边界时回调onDestroy', () => {
    const bullet = new Bullet()
    bullet.y = 0
    bullet.x = 0

    bullet.speed = 1
    bullet.border = 0

    bullet.onDestroy = vi.fn()

    bullet.move()

    expect(bullet.y).toBe(-1)
  })
})
