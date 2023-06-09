import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routers from './router'
import style from './assets/scss/style.scss'
import BtnMore from '@/components/UI/BtnMore.vue'
import Actors from '@/components/UI/Actors.vue'
const app = createApp(App)
app.component('BtnMore', BtnMore).component('Actors', Actors)
app.use(store).use(routers).mount('#app')