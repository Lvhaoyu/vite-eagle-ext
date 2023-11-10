import { createApp } from 'vue'
import App from './App.vue'

eagle.onPluginCreate(() => {
  createApp(App).mount('#app')
})
