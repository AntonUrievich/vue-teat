import { createApp } from 'vue'
import Vuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

createApp(App).use(store).use(router).use (Vuelidate (required, email)).mount('#app')
