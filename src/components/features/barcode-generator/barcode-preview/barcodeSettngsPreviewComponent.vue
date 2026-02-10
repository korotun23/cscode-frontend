<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Preview</h2>
    </div>
    <div class="card-content">
      <div class="field control">
        <label for="barcode-preview-value">Test value</label>
        <div class="control mt-2">
          <input
            id="barcode-preview-value"
            class="input is-fullwidth"
            type="text"
            placeholder="Enter a test value"
            v-model="barcodeParameters.defaultValue"
          />
        </div>
      </div>
      <div class="barcode-preview mb-4" v-html="barcodePreview"></div>
    </div>
    <div
      class="card-footer"
      :disabled="!isPreviewGenerated"
      :class="{
        'has-background-primary': isPreviewGenerated,
        'is-disabled is-outlined': !isPreviewGenerated,
      }"
    >
      <button class="card-footer-item has-text-white">
        <span class="material-symbols-outlined pr-2"> download </span>
        Download preview
      </button>
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
    const isPreviewGenerated = ref(false)

    function updateBarcodePreview() {
      if (
        typeof barcodeGeneratorService === 'undefined' ||
        typeof barcodeParameters === 'undefined'
      ) {
        isPreviewGenerated.value = false
        return
      }

      // Generate barcode preview
      try {
        barcodePreview.value = barcodeGeneratorService.generateBarcode(barcodeParameters)
        if (barcodePreview.value === '') {
          isPreviewGenerated.value = false
          return
        } else {
          isPreviewGenerated.value = true
        }
      } catch (error) {
        console.error(error)
        isPreviewGenerated.value = false
      }
    }

    watch(barcodeParameters, updateBarcodePreview)

    return {
      barcodeParameters,
      barcodeGeneratorService,
      barcodePreview,
      barcodeValue,
      isPreviewGenerated,
      updateBarcodePreview,
    }
  },
})
</script>

<style lang="scss"></style>
