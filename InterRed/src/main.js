import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue'


// const app = createApp(App)
const app2=createApp(App2)
// app.use(createPinia())
app2.use(createPinia())

// app.mount('#app')
app2.mount('#app')
