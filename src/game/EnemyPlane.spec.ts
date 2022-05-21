import { expect, it, describe, vi } from 'vitest'
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from './EnemyPlane'

describe('EnemyPlane', () => {
  it('move', () => {
    const enemy = new EnemyPlane()
    enemy.y = 0
    enemy.speed = 1

    enemy.move()

    expect(enemy.y).toBe(1)
  })

  it('2s创建一个敌军', () => {
    vi.useFakeTimers()

    const enemyPlanes = []

    initEnemyPlanes(enemyPlanes)

    // 每两秒生成一个
    vi.advanceTimersByTime(4000)

    expect(enemyPlanes.length).toBe(2)

    vi.restoreAllMocks()
  })

  it('移动所有敌军', () => {
    const enemy = new EnemyPlane()
    enemy.y = 1

    const enemyPlanes = [enemy]

    runEnemyPlanes(enemyPlanes)

    expect(enemy.y).toBe(2)
  })
})
