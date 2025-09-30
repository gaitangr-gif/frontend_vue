import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
// En esta area importamos las vistas 
// Las vistas estan en la carpeta views que creamos en nuestro proyecto vue

import Inicio from '../views/web/Inicio.vue';
import Contactanos from '../views/web/Contactanos.vue';
import Combo from '../views/web/Combo.vue';
import Login from '../views/auth/Login.vue';

const routes = [
    //Aqui creamos las rutas de navegacion de cada vista importada
    { path: "/", component: Inicio },
    { path: "/contactanos", component: Contactanos },
    { path: "/combo", component: Combo },
    { path: "/auth/login", component: Login}
];

// Con esta linea de codigos habilitamos las rutas anteriores
const router = createRouter({
    // el createWebHashHistory() le agrega un # a las vistas en la direccion url
    history: createWebHashHistory(),
    // Con este no le agrega # a las rutas en la direccion url
    // history: createWebHistory(),
    routes
});

//En esta area exportamos el archivo index.js para que pueda ser llamado por otros SFC
// recordemos habilitar las rutas en el archivo main.js de nuestro proyecto VUE
export default router;
