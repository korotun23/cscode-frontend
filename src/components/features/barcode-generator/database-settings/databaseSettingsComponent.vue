<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header-title">Database Settings</h2>
    </div>
    <div class="card-content pb-5">
      <div class="columns">
        <div class="column is-6">
          <div class="select is-fullwidth">
            <select>
              <option>Column with data ?</option>
              <option>Column 1</option>
              <option>Column 2</option>
              <option>Column 3</option>
            </select>
          </div>
          <div class="block"></div>
          <div class="select is-fullwidth">
            <select>
              <option>Column with files name ?</option>
              <option>Column 1</option>
              <option>Column 2</option>
              <option>Column 3</option>
            </select>
          </div>
        </div>
        <div class="column is-6">
          <h3 class="subtitle has-text-primary">File infos</h3>
          <p>File name : <span>unknown</span></p>
          <p>Number of lines : <span>0</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatabaseSettingsComponent',
  setup() {
    return {}
  },
})
</script>

<style lang="scss"></style>
