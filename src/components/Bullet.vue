<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import bulletImg from '../assets/bullet.png'
import { Bullet } from '../game'

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
})

bullet.width = 72
bullet.height = 72
</script>
