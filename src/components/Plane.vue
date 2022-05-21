<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, PropType } from 'vue'

import planeImg from '../assets/plane.png'
import { Plane } from '../game'

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
})

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'Space') {
    plane.attack()
  }

  switch (event.key) {
    case 'ArrowUp':
      plane.y -= 10
      break
    case 'ArrowDown':
      plane.y += 10
      break
    case 'ArrowLeft':
      plane.x -= 10
      break
    case 'ArrowRight':
      plane.x += 10
      break

    default:
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown, false)
})
</script>
