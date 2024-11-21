import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/route'
import './style.css'
import App from './App.vue'


// const app = createApp(App)
const app=createApp(App)
app.use(createPinia())
app.use(router)

// app.mount('#app')
app.mount('#app')
