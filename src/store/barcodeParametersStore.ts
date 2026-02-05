// Pinia
import { defineStore } from 'pinia'

// Vue
import { ref } from 'vue'

// Types
import { BarcodeParameters } from '@/types/barcodeParameters'

export const useBarcodeParametersStore = defineStore('barcodeParameters', () => {

  const barcodeParameters = ref<BarcodeParameters>(new BarcodeParameters())

  return {
    barcodeParameters
  }
})
