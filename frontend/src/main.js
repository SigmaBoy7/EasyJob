import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import components from "@/components/UI/ui.js"
import './assets/tailwind.css'
import '@/assets/null.scss'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app
.use(router)
.mount('#app')
