<template>
  <h1>Combos Pollito Rico</h1>
  <button v-on:click="obtenerPublicaciones()">Obtener datos externos de json PlaceHolder</button>
  <br>

  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Imágen</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(publicacion, i) in publicaciones">
        <td>{{ publicacion.id }}</td>
        <td>{{ publicacion.title }}</td>
        <td>{{ publicacion.description }}</td>
        <td> <img :src="publicacion.cover_image" alt="" width="150px"></td>
      </tr>
    </tbody>
  </table>

  {{ publicaciones }}

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

 // Lo que esta aqui se llama composision API
// Para trabajar con composicion API debemos agregar en el script la etiqueta setup

// variable
const publicaciones = ref([])

// onMounted es lo primero que ejecuta cuando carga el componente y hay que importarlos 
// Es un constructor.
// desde el ounMounted llamamos a las funciones que creamos abajo

onMounted(() => {
  obtenerPublicaciones()

});

// funciones
function obtenerPublicaciones() {

  fetch('https://dev.to/api/articles')
      .then(response => response.json())
      .then(json => {
        publicaciones.value= json
      })

};

</script>

<style >

</style>


