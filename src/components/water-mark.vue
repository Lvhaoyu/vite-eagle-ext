<script setup lang="ts">
import { type FileItem } from '@/hooks/useWatermark';
import { NWatermark, NEmpty, NConfigProvider, NButton, darkTheme } from 'naive-ui';
import type { WatermarkProps, } from 'naive-ui'
import { ref, type PropType, computed } from 'vue';
import WatermarkForm from './watermark-form.vue'
import html2canvas from 'html2canvas';


const props = defineProps({
    isEmpty: {
        type: Boolean,
        default: false
    },
    fileItem: {
        type: Object as PropType<FileItem>,
        default: null
    }
})
const watermarkConfig = ref<WatermarkProps>({
    content: '核心机密',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 400,
    fontColor: 'rgba(128, 128, 128, .3)',
    width: 192,
    height: 128,
    xOffset: 12,
    yOffset: 28,
    rotate: -15,
    xGap: 0,
    yGap: 0,
})
const handleExportImage = () => {
    const element = document.querySelector('.watermark') as HTMLElement
    html2canvas(element).then(function (canvas) {
        const imgUrl = canvas.toDataURL();
        eagle.item.addFromURL(imgUrl, {
            name: props.fileItem.name + '_' + 'watermark'
        })
    });
}


const theme = computed(() => {
    return eagle.app.isDarkColors() ? darkTheme : undefined;
})

</script>

<template>
    <NConfigProvider :theme="theme" :class="$style['theme']">
        <NEmpty v-if="isEmpty" description="请从 eagle 中拖拽或在打开插件前选中文件（支持 jpg，png）" />
        <div :class="$style['left-container']" v-else>
            <div :class="$style['watermark-container']">
                <NWatermark v-bind="watermarkConfig" class="watermark">
                    <img :class="$style['image-container']" :src="fileItem.filePath" />
                </NWatermark>
            </div>

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

.left-container {
    width: 100%;
    height: 100%;
    display: flex;

    .watermark-container {
        width: auto;
        height: auto;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-container {
        display: block;
        max-width: 100%;
        /* 图片最大宽度为容器宽度 */
        max-height: 100%;
        /* 图片最大高度为容器高度 */
        width: auto;
        height: auto;
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
