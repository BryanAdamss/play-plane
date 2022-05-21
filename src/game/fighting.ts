import { EnemyPlane } from './EnemyPlane'
import { hitTestObj } from './hitTestObj'
import { Plane } from './Plane'

export function fighting(plane: Plane, enemyPlanes: EnemyPlane[]) {
  plane.bullets.forEach((bullet, bIndex) => {
    enemyPlanes.forEach((enemy, eIndex) => {
      if (hitTestObj(bullet, enemy)) {
        plane.bullets.splice(bIndex, 1)
        enemyPlanes.splice(eIndex, 1)
      }
    })
  })
}
