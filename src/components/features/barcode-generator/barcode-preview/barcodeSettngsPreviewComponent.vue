<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Preview</h2>
    </div>
    <div class="card-content">
      <svg></svg>
      <div class="field control">
        <label for="barcode-preview-value">Test value</label>
        <input
          id="barcode-preview-value"
          class="input is-fullwidth"
          type="text"
          placeholder="Enter a test value"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarcodeSettngsPreviewComponent',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
