<script setup lang="ts">
import WaterMark from './components/water-mark.vue'
import Header from './components/ext-header.vue'
import './assets/app.css'
</script>

<template>
  <Header />
  <div :class="$style['container']">
    <WaterMark />
  </div>
</template>

<style module lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
