import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
const store = createPinia()
let app = createApp(App)
app.use(store)

app.mount('#app')
