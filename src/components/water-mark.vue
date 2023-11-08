<script setup lang="ts">
import { useWatermark } from '@/hooks/useWatermark';
import { NWatermark, NEmpty, NImage, NButton } from 'naive-ui';
import type { WatermarkProps } from 'naive-ui'
import { ref } from 'vue';
import WatermarkForm from './watermark-form.vue'
import html2canvas from 'html2canvas';


const { isEmpty, fileItem } = useWatermark()
const watermarkConfig = ref<WatermarkProps>({
    content: '核心机密',
    fontSize: 16,
    lineHeight: 16,
    width: 192,
    height: 128,
    xOffset: 12,
    yOffset: 28,
    rotate: -15
})
const handleExportImage = () => {
    const element = document.querySelector('.watermark') as HTMLElement
    html2canvas(element).then(function (canvas) {
        document.body.appendChild(canvas);
    });
}


</script>

<template>
    <div :class="$style['water-mark']">
        <WatermarkForm :watermarkConfig="watermarkConfig" />
        <NEmpty v-if="isEmpty" />
        <NWatermark v-else v-bind="watermarkConfig" class="watermark">
            <img :src="fileItem.filePath" width="300" />
        </NWatermark>
        <NButton @click="handleExportImage">导出</NButton>
    </div>
</template>

<style module lang="less">
.water-mark {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
