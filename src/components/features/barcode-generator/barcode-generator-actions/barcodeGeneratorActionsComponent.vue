<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <button class="button is-primary is-fullwidth is-outlined">
            <span class="material-symbols-outlined pr-2"> barcode </span>
            Generate
          </button>
        </div>
        <div class="column is-3">
          <button class="button is-primary is-fullwidth is-outlined" disabled>
            <span class="material-symbols-outlined pr-2"> download </span>
            Dowload
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarcodeGeneratorActionsComponent',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
