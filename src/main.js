import './assets/main.css'
import 'flowbite';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa il file CSS per le animazioni

import { createApp } from 'vue'
import App from './App.vue'
AOS.init();
createApp(App).mount('#app')
