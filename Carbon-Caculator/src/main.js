import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Elementplus from "element-plus"

const app = createApp(App)

app.use(Elementplus)
app.use(router)

app.mount('#app')
