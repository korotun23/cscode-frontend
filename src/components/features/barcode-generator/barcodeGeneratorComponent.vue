<template>
  <!-- HERO -->
  <div class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Welcome to Barcode Generator</h1>
        <p class="subtitle">Ready to generate some code ?</p>
      </div>
    </div>
  </div>
  <!-- END HERO -->
  <!-- SPACER -->
  <div class="block"></div>
  <!-- END SPACER -->
  <!-- CONTENT : SETTINGS / PREVIEW -->
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-7">
        <BarcodeSettingsComponent />
      </div>
      <div class="column is-5">
        <BarcodePreviewComponent />
      </div>
    </div>
    <!-- END CONTENT : SETTINGS / PREVIEW -->
    <!-- DATABASE SELECTOR -->
    <div class="container">
      <DatabaseSelectorComponent />
    </div>
    <!-- END DATABASE SELECTOR -->
    <div class="column pt-3">
      <div class="column is-12">
        <DatabaseSettingsComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Child components
import BarcodeSettingsComponent from './barcode-settings/barcodeSettingsComponent.vue'
import BarcodePreviewComponent from './barcode-preview/barcodeSettngsPreviewComponent.vue'
import DatabaseSelectorComponent from './database-selector/databaseSelectorComponent.vue'
// Styles
import './sass/style.scss'

export default defineComponent({
  name: 'BarcodeGeneratorComponent',
  components: {
    BarcodeSettingsComponent,
    BarcodePreviewComponent,
    DatabaseSelectorComponent,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
