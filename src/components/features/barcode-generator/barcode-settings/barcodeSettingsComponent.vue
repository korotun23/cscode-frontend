<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Settings</h2>
    </div>
    <div class="card-content">
      <div class="field">
        <label for="barcode-type">Barcode type</label>
        <div class="select is-fullwidth mt-2">
          <select id="barcode-type">
            <option>Select the barcode type</option>
          </select>
        </div>
      </div>
      <div class="columns fieldset">
        <div class="column is-6">
          <div class="field control">
            <label for="barcode-width">Width</label>
            <div class="control mt-2">
              <input id="barcode-width" class="input is-fullwidth" type="number" placeholder="0" />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field control">
            <label for="barcode-height">Height</label>
            <div class="control mt-2">
              <input id="barcode-height" class="input is-fullwidth" type="number" placeholder="0" />
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label for="image-file-format">Image file format</label>
        <div class="select is-fullwidth mt-2">
          <select id="image-file-format">
            <option>Select the image file format</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="form-control-checkbox">
          <input type="checkbox" />Print text value under the barcode</label
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarcodeSettingsComponent',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
