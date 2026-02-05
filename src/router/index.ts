import { createRouter, createWebHistory } from 'vue-router'

// Import components
import barcodeGeneratorComponent from '../components/features/barcode-generator/barcodeGeneratorComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/barcode-generator',
      name: 'BarcodeGenerator',
      component: barcodeGeneratorComponent,
    },
    {
      path: '/',
      name: 'BarcodeGenerator',
      component: barcodeGeneratorComponent,
    },
  ],
})

export default router
