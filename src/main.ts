import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// 确保使用 ES 模块导入路由
import router from './router/index'
import './styles/main.scss'

// 创建应用实例
const app = createApp(App)

// 使用 Pinia 状态管理
const pinia = createPinia()
app.use(pinia)

// 添加路由
app.use(router)

// 挂载应用
app.mount('#app')
