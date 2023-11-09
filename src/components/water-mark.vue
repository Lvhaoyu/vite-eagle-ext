<script setup lang="ts">
import { useWatermark } from '@/hooks/useWatermark';
import { NWatermark, NEmpty, NConfigProvider, NButton, darkTheme } from 'naive-ui';
import type { WatermarkProps, } from 'naive-ui'
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
    <NConfigProvider :theme="darkTheme" :class="$style['theme']">
        <NEmpty v-if="isEmpty" />
        <div :class="$style['water-mark']" v-else>
            <NWatermark v-bind="watermarkConfig" class="watermark">
                <img :class="$style['image-container']" :src="fileItem.filePath"/>
            </NWatermark>
            <div :class="$style['image-form']">
                <WatermarkForm :watermarkConfig="watermarkConfig" />
                <NButton @click="handleExportImage">导出</NButton>
            </div>
        </div>
    </NConfigProvider>
</template>

<style module lang="less">
.theme {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.water-mark {
    width: 100%;
    height: 100%;
    display: flex;

    .image-container {
        display: flex;
        height: 100%;
        width: 100%;
        flex: 1;
        object-fit: contain;
    }

    .image-form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 24px;
        height: 100%;
        border-left: 1px solid rgba(255, 255, 255, calc(10 / 100));
    }
}
</style>