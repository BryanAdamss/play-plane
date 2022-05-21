import { expect, it, describe } from 'vitest'
import { Bullet } from './Bullet'
import { EnemyPlane } from './EnemyPlane'
import { fighting } from './fighting'
import { setupPlane } from './Plane'

describe('Bullet', () => {
  it('敌军同我方子弹碰撞，都会销毁', () => {
    const bullet = new Bullet()
    bullet.x = 0
    bullet.y = 0

    bullet.width = 100
    bullet.height = 100

    const bullets = [bullet]

    const plane = setupPlane({}, bullets)

    const enemy = new EnemyPlane()
    enemy.x = 50
    enemy.y = 50
    enemy.width = 100
    enemy.height = 100

    const enemyPlanes = [enemy]

    fighting(plane, enemyPlanes)

    expect(bullets.length).toBe(0)
    expect(enemyPlanes.length).toBe(0)
  })
})
