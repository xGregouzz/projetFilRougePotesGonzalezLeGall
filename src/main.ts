import { createApp } from 'vue'
import { createPinia } from 'pinia'

import HomeViewVue from './views/HomeView.vue'
import router from './router'

const app = createApp(HomeViewVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
