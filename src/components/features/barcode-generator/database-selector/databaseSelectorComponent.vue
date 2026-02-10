<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Database selector</h2>
    </div>
    <div class="card-content pb-4">
      <div class="columns">
        <div class="column is-10">
          <div class="file has-name is-fullwidth">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="material-symbols-outlined pr-2"> database_upload </span>
                <span class="file-label">Database file</span>
              </span>
              <span class="file-name">No file uploaded</span>
            </label>
          </div>
        </div>
        <div class="column is-2">
          <button class="button is-primary is-outlined is-fullwidth">
            <span class="material-symbols-outlined pr-2"> upload </span>
            Upload
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
  name: 'DatabaseSelectorComponent',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
