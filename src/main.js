import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'

//createApp(App).mount('#app') //En nombre del componente de aqui es el que arrancara de inicio
//Editamos la linea anterior agregando .use() entre los parentesis la ruta que habilitaremos
createApp(App).use(router).mount('#app')