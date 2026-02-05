<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Settings</h2>
    </div>
    <div class="card-content">
      <div class="field">
        <label for="barcode-type">Barcode type</label>
        <div class="select is-fullwidth mt-2">
          <select id="barcode-type" v-model="selectedBarcodeType">
            <option disabled value>Select the barcode type</option>
            <option
              v-for="barcodeType in barcodeTypes"
              :key="barcodeType.identifier"
              :value="barcodeType"
            >
              {{ barcodeType.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="columns fieldset">
        <div class="column is-6">
          <div class="field control">
            <label for="barcode-width">Width</label>
            <div class="control mt-2">
              <input
                id="barcode-width"
                class="input is-fullwidth"
                type="number"
                placeholder="0"
                v-model="barcodeParameters.size[0]"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field control">
            <label for="barcode-height">Height</label>
            <div class="control mt-2">
              <input
                id="barcode-height"
                class="input is-fullwidth"
                type="number"
                placeholder="0"
                v-model="barcodeParameters.size[1]"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label for="image-file-format">Image file format</label>
        <div class="select is-fullwidth mt-2">
          <select id="image-file-format">
            <option disabled value>Select the image file format</option>
            <option>png</option>
            <option>jpg</option>
            <option>jpeg</option>
            <option>webp</option>
            <option>svg</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="form-control-checkbox">
          <input type="checkbox" v-model="barcodeParameters.printTextValue" />
          Print text value under the barcode
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent, inject, ref } from 'vue'
// Service
import { BarcodeTypeService } from '@/services/barcodeTypeService'
// Types
import type { BarcodeTypeInterface } from '@/types/barcodeTypeInterface'
import { BarcodeParameters } from '@/types/barcodeParameters'
// Store
import { useBarcodeSettingsStore } from '@/store/barcodeSettingsStore'

export default defineComponent({
  name: 'BarcodeSettingsComponent',
  setup() {
    // Store
    const barcodeSettingsStore = useBarcodeSettingsStore()
    const barcodeParameters: BarcodeParameters | undefined = barcodeSettingsStore.barcodeParameters

    // Services injected
    const barcodeTypeService: BarcodeTypeService | undefined =
      inject<BarcodeTypeService>('barcodeTypeService')
    const barcodeTypes: BarcodeTypeInterface[] | undefined = barcodeTypeService?.getBarcodeTypes()

    const selectedBarcodeType = ref<BarcodeTypeInterface | undefined>(undefined)

    return {
      barcodeTypes,
      selectedBarcodeType,
      barcodeParameters,
    }
  },
})
</script>

<style lang="scss"></style>
