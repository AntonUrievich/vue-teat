import { createApp } from 'vue'
import Vuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

createApp(App).use(store).use(router).use(Vuelidate (required, email)).use(firebaseConfig).use(analytics).mount('#app')

const firebaseConfig = {
    apiKey: "AIzaSyAg6MIiEv0fEztNUtE07zI__FF-OqQHV1c",
    authDomain: "vue-test-9bc56.firebaseapp.com",
    projectId: "vue-test-9bc56",
    storageBucket: "vue-test-9bc56.appspot.com",
    messagingSenderId: "954379291165",
    appId: "1:954379291165:web:0d5ca0983f1932454014f4",
    measurementId: "G-MXD8XEKX1C"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);