import { createApp } from 'vue'
import App from './App.vue'
import { useGlobalData } from './hooks/useGlobalData'

useGlobalData()

eagle.onPluginCreate(() => {
  createApp(App).mount('#app')
})
