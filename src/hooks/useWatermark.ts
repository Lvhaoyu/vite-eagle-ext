import { onMounted, computed, ref } from 'vue'

interface FileItem {
  filePath: string
  fileURL: string
}

export const useWatermark = () => {
  const fileItem = ref<FileItem>({ filePath: '', fileURL: '' })
  const isEmpty = computed(() => {
    return !fileItem.value.filePath
  })
  onMounted(async () => {
    // 取得 Eagle 应用当前被选中的文件
    const items = await eagle.item.getSelected()
    const item = items[0]
    fileItem.value = {
      filePath: item.filePath,
      fileURL: item.fileURL
    }
  })

  return {
    isEmpty,
    fileItem
  }
}
