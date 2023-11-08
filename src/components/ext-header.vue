<script setup lang="ts">
import { NIcon, NPopconfirm } from 'naive-ui'
import { Close } from '@vicons/ionicons5'

const handlePositiveClick = () => {
    window.close();
}
</script> 

<template>
    <div :class="$style['header']">
        <div :class="$style['drag']">
            <img src="../assets/logo.png" alt="watermark" :class="$style['logo']">
            <span :class="$style['title']">图片添加水印</span>
        </div>
        <NPopconfirm @positive-click="handlePositiveClick" negative-text="取消" positive-text="确认">
            <template #trigger>
                <NIcon size="24">
                    <Close :class="$style['icon-close']" />
                </NIcon>
            </template>
            退出插件后，所有正在进行的任务将终止
        </NPopconfirm>

    </div>
</template>

<style module lang="less">
.header {
    padding: 8px;
    display: flex;
    align-items: center;

    .drag {
        -webkit-app-region: drag;
        display: flex;
        align-items: center;
        flex: 1;

        .title {
            color: #f8f9fb;
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            margin-left: 8px;
        }

        .logo {
            width: 30px;
            height: 30px;
            border-radius: 6px;

        }


    }

    .icon-close {
        color: #f8f9fb;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
