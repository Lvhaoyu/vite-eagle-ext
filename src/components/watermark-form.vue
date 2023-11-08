<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { NForm, NFormItem, NInput, type FormInst, type WatermarkProps, NInputNumber } from 'naive-ui'

const props = defineProps({
    watermarkConfig: {
        type: Object as PropType<WatermarkProps>,
        default: () => ({})
    }
})
const formRef = ref<FormInst | null>(null)
const model = ref<WatermarkProps>(props.watermarkConfig)


</script>

<template>
    <NForm ref="formRef" :model="model" label-placement="left" label-width="auto">
        <NFormItem label="水印文本" path="content">
            <NInput></NInput>
        </NFormItem>
        <NFormItem label="字体大小" path="fontSize">
            <NInput></NInput>
        </NFormItem>
        <NFormItem label="字重" path="fontWeight">
            <NInput></NInput>
        </NFormItem>
        <NFormItem label="字体颜色" path="fontColor">
            <NInput></NInput>
        </NFormItem>
        <NFormItem label="旋转角度	" path="rotate">
            <NInputNumber></NInputNumber>
        </NFormItem>
        <NFormItem label="行高" path="lineHeight">
            <NInputNumber></NInputNumber>
        </NFormItem>
        <NFormItem label="x 轴间隔" path="xGap">
            <NInputNumber></NInputNumber>
        </NFormItem>
        <NFormItem label="Y 轴间隔" path="yGap">
            <NInputNumber></NInputNumber>
        </NFormItem>
        <NFormItem label="X 轴偏移" path="xOffset">
            <NInputNumber></NInputNumber>
        </NFormItem>
        <NFormItem label="Y 轴偏移" path="yOffset">
            <NInputNumber></NInputNumber>
        </NFormItem>
    </NForm>
</template>

<style module lang="less"></style>
