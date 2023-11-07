import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

eagle.onPluginCreate((plugin: any) => {
  console.log('eagle.onPluginCreate')
  console.log(plugin)

  createApp(App).mount('#app')
})

eagle.onPluginRun(() => {
  console.log('eagle.onPluginRun')
})

eagle.onPluginShow(() => {
  console.log('eagle.onPluginShow')
})

eagle.onPluginHide(() => {
  console.log('eagle.onPluginHide')
})

eagle.onPluginBeforeExit((event: any) => {
  console.log('eagle.onPluginBeforeExit')
})
