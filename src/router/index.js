import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
// En esta area importamos las vistas 
// Las vistas estan en la carpeta views que creamos en nuestro proyecto vue

import Inicio from '../views/web/Inicio.vue';
import Contactanos from '../views/web/Contactanos.vue';
import Combo from '../views/web/Combo.vue';

import Login from '../views/auth/Login.vue';

import Perfil from '../views/admin/perfil/Perfil.vue';
import Usuario from '../views/admin/user/Usuario.vue';

import AppLayout from '@/layout/AppLayout.vue';
import AppPublicLayout from '@/layouts/AppPublicLayout.vue';

const routes = [
  //Aqui creamos las rutas de navegacion de cada vista importada

  //{ path: "/", component: Inicio },
  //{ path: "/contactanos", component: Contactanos },
  //{ path: "/combo", component: Combo },

  // 🌐 WEB PUBLICA
  {
    path: "/",
    component: AppPublicLayout,
    children: [
      {
        path: "",
        component: Inicio,
        name: "Inicio",
      },
      {
        path: "combo",
        component: Combo,
        name: "Combo",
      },
      {
        path: "contactanos",
        component: Contactanos,
        name: "Contactanos",
      },
      // 🔐 LOGIN
      {
        path: "auth/login",
        component: Login,
        name: "Login",
        meta: { redirectIfAuth: true },
      },
    ],
  },

  // 💼 ERP (SAKAI LAYOUT)
  {
    path: "/admin",
    component: AppLayout,
    meta: { requireAuth: true },
    children: [
      {
        path: "perfil",
        component: Perfil,
        name: "MiPerfil",
      },
      {
        path: "usuario",
        component: Usuario,
        name: "Usuario",
      },
    ],
  },

];

// Con esta linea de codigos habilitamos las rutas anteriores
const router = createRouter({
    // el createWebHashHistory() le agrega un # a las vistas en la direccion url
    history: createWebHashHistory(),
    // Con este no le agrega # a las rutas en la direccion url
    // history: createWebHistory(),
    routes
})

//Configuramos los GUARDS para proteger nuestras rutas
 router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("access_token");
 
    if(to.meta.requireAuth){ //Si la autenticacion es correcta
        if(!token){ //Sino existe token
            return next({name: 'Login'}) //Redirecciona a la ruta Login sino tiene token
        }
        
        return next(); //Si tiene un token continua
    }

    if(to.meta.redirectIfAuth && token){
        return next({name: 'MiPerfil'})
    }

    return next(); //El next me permitira pasar, sino lo pongo no muestra las rutas
    
 })

//En esta area exportamos el archivo index.js para que pueda ser llamado por otros SFC
// recordemos habilitar las rutas en el archivo main.js de nuestro proyecto VUE
 export default router;
