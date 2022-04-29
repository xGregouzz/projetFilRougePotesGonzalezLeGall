import InvoiceVue from '@/components/Invoice.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/components/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/factures',
      name: 'factures',
      component: InvoiceVue
    }

  ]
})
export default router