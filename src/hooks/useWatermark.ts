import { onMounted, computed, ref } from 'vue'

export interface FileItem {
  filePath: string
  width: number
  height: number
  name: string
}

export const useWatermark = () => {
  const fileItem = ref<FileItem>({ filePath: '', width: 0, height: 0, name: '' })
  const isEmpty = computed(() => {
    return !fileItem.value.filePath
  })
  const getEagleSelectedItem = async () => {
    // 取得 Eagle 应用当前被选中的文件
    const items = await eagle.item.getSelected()
    const item = items[0]
    if (item) {
      fileItem.value = {
        filePath: item.filePath,
        width: item.width,
        height: item.height,
        name: item.name
      }
    }
  }
  onMounted(async () => {
    await getEagleSelectedItem()
  })

  return {
    isEmpty,
    fileItem,
    getEagleSelectedItem
  }
}
