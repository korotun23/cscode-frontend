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
          <select id="image-file-format" v-model="barcodeParameters.imageFormat">
            <option disabled value>Select the image file format</option>
            <option v-for="imageFormat in ImageFormat" :key="imageFormat" :value="imageFormat">
              {{ imageFormat }}
            </option>
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
import { defineComponent, inject, ref, watch } from 'vue'
// Service
import { BarcodeTypeService } from '@/services/barcodeTypeService'
// Types
import type { BarcodeTypeInterface } from '@/types/barcodeTypeInterface'
import { BarcodeParameters } from '@/types/barcodeParameters'
import { ImageFormat } from '@/types/imageFileFormat'

// Store
import { useBarcodeParametersStore } from '@/store/barcodeParametersStore'

export default defineComponent({
  name: 'BarcodeSettingsComponent',
  setup() {
    // Store
    const barcodeParametersStore = useBarcodeParametersStore()
    const barcodeParameters: BarcodeParameters = barcodeParametersStore.barcodeParameters

    // Services injected
    const barcodeTypeService: BarcodeTypeService | undefined =
      inject<BarcodeTypeService>('barcodeTypeService')
    const barcodeTypes: BarcodeTypeInterface[] | undefined = barcodeTypeService?.getBarcodeTypes()

    const selectedBarcodeType = ref<BarcodeTypeInterface | undefined>(undefined)

    function updateDefaultValues(barcodeType: BarcodeTypeInterface | undefined) {
      if (typeof barcodeType === 'undefined') {
        barcodeParameters.size[0] = 0
        barcodeParameters.size[1] = 0
        barcodeParameters.defaultValue = ''
        return
      }
      barcodeParameters.identifier = barcodeType.identifier
      barcodeParameters.name = barcodeType.name
      barcodeParameters.size[0] = barcodeType.size[0]
      barcodeParameters.size[1] = barcodeType.size[1]
      barcodeParameters.defaultValue = barcodeType.defaultValue
    }

    watch(selectedBarcodeType, (newBarcodeType: BarcodeTypeInterface | undefined) => {
      updateDefaultValues(newBarcodeType)
    })

    return {
      barcodeTypes,
      selectedBarcodeType,
      barcodeParameters,
      ImageFormat,
      updateDefaultValues,
    }
  },
})
</script>

<style lang="scss"></style>
