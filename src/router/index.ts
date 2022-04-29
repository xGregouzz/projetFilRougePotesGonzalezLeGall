import InvoiceView from '@/views/InvoiceView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/invoice',
      name: 'invoice-vue',
      component: InvoiceView
    }
  ]
})
export default router