<template>
    <h1>Ingresar</h1>
    
    <label for="">Ingrese Correo: </label>
    <input type="email" v-model="credenciales.email">
    <br>
    <label for="">Ingrese Contraseña: </label>
    <input type="password" v-model="credenciales.password">
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

const credenciales = ref({ email: "", password: "" });
const respuesta = ref();

async function funIngresar() {
    const res = await authService.login(credenciales.value);
    respuesta.value = res.data

}

</script>

