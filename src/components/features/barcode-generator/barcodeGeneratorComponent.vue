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
  <!-- CONTENT : SETTINGS / PREVIEW -->
  <div class="container pt-5">
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
    <div class="columns">
      <div class="column is-12">
        <DatabaseSelectorComponent />
      </div>
    </div>
    <!-- END DATABASE SELECTOR -->
    <!-- DATABASE SETTINGS -->
    <div class="columns">
      <div class="column is-12">
        <DatabaseSettingsComponent />
      </div>
    </div>
    <!-- END DATABASE SETTINGS -->
    <div class="columns">
      <div class="column is-12">
        <BarcodeGeneratorActionsComponent />
      </div>
    </div>
    <!-- SPACER -->
    <div class="block"></div>
    <!-- END SPACER -->
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Store
import { useBarcodeParametersStore } from '@/store/barcodeParametersStore'
// Types
import { BarcodeParameters } from '@/types/barcodeParameters'
// Child components
import BarcodeSettingsComponent from './barcode-settings/barcodeSettingsComponent.vue'
import BarcodePreviewComponent from './barcode-preview/barcodeSettngsPreviewComponent.vue'
import DatabaseSelectorComponent from './database-selector/databaseSelectorComponent.vue'
import DatabaseSettingsComponent from './database-settings/databaseSettingsComponent.vue'
import BarcodeGeneratorActionsComponent from './barcode-generator-actions/barcodeGeneratorActionsComponent.vue'
// Styles
import './sass/style.scss'

export default defineComponent({
  name: 'BarcodeGeneratorComponent',
  components: {
    BarcodeSettingsComponent,
    BarcodePreviewComponent,
    DatabaseSelectorComponent,
    DatabaseSettingsComponent,
    BarcodeGeneratorActionsComponent,
  },
  setup() {
    // Store
    const barcodeSettingsStore = useBarcodeParametersStore()
    const barcodeParameters: BarcodeParameters | undefined = barcodeSettingsStore.barcodeParameters
    return {
      barcodeParameters,
    }
  },
})
</script>

<style lang="scss"></style>
