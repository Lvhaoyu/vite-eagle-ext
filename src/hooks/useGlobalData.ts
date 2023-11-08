import { reactive } from 'vue'

const globalData = reactive<any>({
  item: undefined
})

export const useGlobalData = () => {
  eagle.onPluginCreate(() => {})

  eagle.onPluginRun(() => {})

  eagle.onPluginShow(async () => {})

  eagle.onPluginHide(() => {})

  eagle.onPluginBeforeExit(() => {})

  return {
    globalData
  }
}
