<template>
  <Container :x="enemy.x" :y="enemy.y">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { EnemyPlane } from '../game'

import enemyPlaneImg from '../assets/enemy-plane.png'

const { enemy } = defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
})

enemy.width = 138
enemy.height = 104
</script>
