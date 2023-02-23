import { createApp } from 'vue'
import VueConfetti from 'vue-confetti'
import App from './App.vue'
import './style.css'

createApp(App)
  .use(VueConfetti)
  .mount('#app')
