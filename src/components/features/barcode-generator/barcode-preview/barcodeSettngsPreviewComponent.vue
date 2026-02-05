<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Preview</h2>
    </div>
    <div class="card-content">
      <svg v-html="barcodePreview"></svg>
      <div class="field control">
        <label for="barcode-preview-value">Test value</label>
        <input
          id="barcode-preview-value"
          class="input is-fullwidth"
          type="text"
          placeholder="Enter a test value"
          v-model="barcodeParameters.defaultValue"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent, inject, ref, watch } from 'vue'

// Store
import { useBarcodeParametersStore } from '@/store/barcodeParametersStore'

// Type
import { BarcodeParameters } from '@/types/barcodeParameters'
import { BarcodeGeneratorService } from '@/services/barcodeGeneratorService'

export default defineComponent({
  name: 'BarcodeSettngsPreviewComponent',
  setup() {
    // Store
    const barcodeParametersStore = useBarcodeParametersStore()
    const barcodeParameters: BarcodeParameters | undefined =
      barcodeParametersStore.barcodeParameters

    // Services injected
    const barcodeGeneratorService: BarcodeGeneratorService | undefined =
      inject<BarcodeGeneratorService>('barcodeGeneratorService')

    // Refs
    const barcodePreview = ref('')
    const barcodeValue = ref('')

    function updateBarcodePreview() {
      if (
        typeof barcodeGeneratorService === 'undefined' ||
        typeof barcodeParameters === 'undefined'
      ) {
        return
      }

      // Generate barcode preview
      try {
        barcodePreview.value = barcodeGeneratorService.generateBarcode(barcodeParameters)
      } catch (error) {
        console.error(error)
      }
    }

    watch(barcodeParameters, updateBarcodePreview)

    return {
      barcodeParameters,
      barcodeGeneratorService,
      barcodePreview,
      barcodeValue,
      updateBarcodePreview,
    }
  },
})
</script>

<style lang="scss"></style>
