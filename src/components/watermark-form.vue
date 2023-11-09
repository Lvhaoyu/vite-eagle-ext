<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { NForm, NFormItem, NInput, type WatermarkProps, NInputNumber } from 'naive-ui'

const props = defineProps({
    watermarkConfig: {
        type: Object as PropType<WatermarkProps>,
        default: () => ({})
    }
})
const model = ref<WatermarkProps>(props.watermarkConfig)


</script>

<template>
    <NForm :model="props.watermarkConfig" label-placement="left" label-width="auto">
        <NFormItem label="水印文本" path="content">
            <NInput :default-value="model.content" v-model:value="model.content"></NInput>
        </NFormItem>
        <NFormItem label="字体大小" path="fontSize">
            <NInputNumber :default-value="model.fontSize" v-model:value="model.fontSize"></NInputNumber>
        </NFormItem>
        <NFormItem label="字重" path="fontWeight">
            <NInputNumber :default-value="model.fontWeight" v-model:value="model.fontWeight"></NInputNumber>
        </NFormItem>
        <NFormItem label="字体颜色" path="fontColor">
            <NInput :default-value="model.fontColor" v-model:value="model.fontColor"></NInput>
        </NFormItem>
        <NFormItem label="旋转角度	" path="rotate">
            <NInputNumber :default-value="model.rotate" v-model:value="model.rotate"></NInputNumber>
        </NFormItem>
        <NFormItem label="行高" path="lineHeight">
            <NInputNumber :default-value="model.lineHeight" v-model:value="model.lineHeight"></NInputNumber>
        </NFormItem>
        <NFormItem label="x 轴间隔" path="xGap">
            <NInputNumber :default-value="model.xGap" v-model:value="model.xGap"></NInputNumber>
        </NFormItem>
        <NFormItem label="Y 轴间隔" path="yGap">
            <NInputNumber :default-value="model.yGap" v-model:value="model.yGap"></NInputNumber>
        </NFormItem>
        <NFormItem label="X 轴偏移" path="xOffset">
            <NInputNumber :default-value="model.xOffset" v-model:value="model.xOffset"></NInputNumber>
        </NFormItem>
        <NFormItem label="Y 轴偏移" path="yOffset">
            <NInputNumber :default-value="model.yOffset" v-model:value="model.yOffset"></NInputNumber>
        </NFormItem>
    </NForm>
</template>

<style module lang="less"></style>
