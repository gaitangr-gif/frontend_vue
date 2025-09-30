
<template>
  <h1> Web Pollito Rico</h1>

  <!-- link que llaman a las rutas de navegacion creadas en los routes del archivo src/router/index.js-->
  <RouterLink to="/">Inicio</RouterLink> |
  <RouterLink to="/combo">Combos</RouterLink> |
  <RouterLink to="/contactanos">Contactanos</RouterLink> |
  <RouterLink to="/auth/login">Ingresar</RouterLink>

  <br>

  <!-- Este RouterView renderiza y muestra el contenido de las vistas que se llaman en el menu con RouterLink-->
  <RouterView> </RouterView>

</template>
