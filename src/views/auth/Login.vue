<template>
    <h1>Ingresar</h1>
    
    <label for="">Ingrese Correo: </label>
    <input type="email" v-model="credenciales.email"> {{ errors.email }}
    <br>
    <label for="">Ingrese Contraseña: </label>
    <input type="password" v-model="credenciales.password"> {{ errors.password }}
    <br>
    <br>
    <button v-on:click="funIngresar()">Ingresar</button>
    <br>
    <br>
    {{ credenciales }}
    <br>
    <br>
    {{ respuesta }}

</template>

<script setup>

import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';

const credenciales = ref({ email: "", password: "" });
const respuesta = ref();
const errors = ref({}); //Variable con valor vacio para capturar el error
const router = useRouter() //Esta variable la uso para redireccionar a las rutas creadas en ViewRouter

async function funIngresar() {    
    try {

        //Peticion al servidor
        const res = await authService.login(credenciales.value); //aqui se da la peticion al servidor
        //Respuesta
        respuesta.value = res.data

        //Guaradamos el Token en en Local Storage del navegador
        localStorage.setItem("access_token", res.data.access_token)

        //Redireccionar al Perfil
        router.push({name: 'MiPerfil'});
        

    } catch (error) { //En caso de error se captura
        
        //Los siguiente console.log son para visualizar en la consola del navegador el error 
        //console.log(error) //Me permite ver el error en la consola del navegador
        //Esto me permitirá capturar solo lo que necesito para luego mistrarlo en el template        
        //console.log(error.response?.data?.errors); //Captura solo la larte del error que me interesa 

        //Guarda en una variable solo la parte del error que me interesa, para este caso solo
        // me importa la respuesta del backend, para luego mostrarlo en el Template del SFC
        errors.value = error.response?.data?.errors 

    }    
}

</script>

