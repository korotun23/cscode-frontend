// Imports
// Vue
import { createApp } from 'vue'

// Router
import router from './router'

// State management
import { createPinia } from 'pinia'

// Styles
import './sass/_global.scss'

// Fonts
import '@fontsource/poppins'
import '@fontsource/courier-prime'

// App
import App from './app/App.vue'

// Services
import { BarcodeTypeService } from './services/barcodeTypeService'
import { BarcodeGeneratorService } from './services/barcodeGeneratorService'

const app = createApp(App)
const pinia = createPinia()

// Provide services to the app and all child components
app.provide('barcodeTypeService', new BarcodeTypeService())
app.provide('barcodeGeneratorService', new BarcodeGeneratorService())

app.use(router)
app.use(pinia)

app.mount('#app')
