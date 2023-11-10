<script setup lang="ts">
import WaterMark from './components/water-mark.vue'
import Header from './components/ext-header.vue'
import './assets/app.css'
import { useWatermark } from './hooks/useWatermark';
import { ref } from 'vue';

const { isEmpty, getEagleSelectedItem, fileItem } = useWatermark()

const showDropArea = ref(false)

const onDrop = async () => {
  if (!isEmpty.value) return;
  showDropArea.value = false;
  await getEagleSelectedItem()
}
const onDragOver = () => {
  if (showDropArea.value || !isEmpty.value) return;
  showDropArea.value = true;
}
const onDragLeave = () => {
  if (!isEmpty.value) return;
  showDropArea.value = false;
}
</script>

<template>
  <Header />
  <div :class="[$style['drop-container'], { [$style['drop-container-area']]: showDropArea }]" @drop.stop="onDrop"
    @dragover.prevent.stop="onDragOver" @dragleave.stop="onDragLeave">
    <WaterMark :isEmpty="isEmpty" :file-item="fileItem" />
  </div>
</template>

<style module lang="less">
.drop-container {
  width: 100%;
  height: 100%;
  display: flex;

  &-area {
    background-color: rgba(50, 151, 255, calc(20 / 100));
    border: 1px solid #3297ff;
    z-index: 99;
  }
}
</style>
