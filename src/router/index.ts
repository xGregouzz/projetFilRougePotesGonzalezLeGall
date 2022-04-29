import { createRouter, createWebHistory } from 'vue-router'
import InvoiceView from '@/views/InvoiceView.vue'
import HomeView from '@/views/HomeView.vue'
import InvoiceListView from '@/views/InvoiceListView.vue'
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
    },
    {
      path: '/invoices',
      name: 'invoiceList-vue',
      component: InvoiceListView
    }
  ]
})
export default router