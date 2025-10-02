<template>
    <h1>Mi Perfil</h1>
    <h3> NOMBRE: {{ perfil.name }}</h3>  
    <h3> CORREO: {{ perfil.email }}</h3>
    <br>
    <br>
    <button v-on:click="funSalir">SALIR</button>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';
import { useRouter } from 'vue-router';

const perfil = ref({})
const router = useRouter()

//Lo primero que se ejecuta cuando carga la pagina
onMounted(() => {
    getPerfil()
})

//Funcion para capturar el Perfil de usuario
async function getPerfil(){
    const {data} = await authService.perfil(); 
    perfil.value = data;
} 

//Funcion para salir / logout
async function funSalir(){
    await authService.logout(); //llama a la ruta del backen que contiene el controlador logout
    localStorage.removeItem("access_token"); //Limpia el token del localStorage

    router.push({name: 'Login'})
}

</script>