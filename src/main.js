import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config' // PrimeVue
import Aura from '@primevue/themes/aura' // Tema (Aura recomendado)

import Button from 'primevue/button' // Componente de ejemplo (Button)
import StyleClass from 'primevue/styleclass'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

import 'primeicons/primeicons.css'
import '@/assets/styles.scss'

//createApp(App).mount('#app') //En nombre del componente de aqui es el que arrancara de inicio
//Editamos la linea anterior agregando .use() entre los parentesis la ruta que habilitaremos
const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
})

// 🔥 CRÍTICO: habilita v-styleclass
app.directive('styleclass', StyleClass)

// Registrar componentes globales
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Password', Password)
    
app.mount('#app')




