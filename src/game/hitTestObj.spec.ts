import { expect, it, describe } from 'vitest'
import { hitTestObj } from './hitTestObj'

describe('Bullet', () => {
  it('矩形相交返回true', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    }

    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    }

    const ret = hitTestObj(rectA, rectB)

    expect(ret).toBe(true)
  })

  it('矩形不相交返回false', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    }

    const rectB = {
      x: 200,
      y: 200,
      width: 100,
      height: 100,
    }

    const ret = hitTestObj(rectA, rectB)

    expect(ret).toBe(false)
  })
})
