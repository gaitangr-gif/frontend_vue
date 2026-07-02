<template>
  <div class="public-layout">

    <nav class="navbar">
      <ul class="nav-menu">

        <li class="nav-logo">
          <img src="/logo.png" alt="Pollito Rico" />
        </li>

        <li>
          <RouterLink to="/" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" class="nav-link">
              Inicio
            </a>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/combo" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" class="nav-link">
              Combos
            </a>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/contactanos" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" class="nav-link">
              Contáctanos
            </a>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/auth/login" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" class="nav-link">
              Ingresar
            </a>
          </RouterLink>
        </li>

      </ul>
    </nav>


    <section class="hero">
      <img src="/familia.jpg" alt="Familia comiendo" />
    </section>

    <main class="content">
      <RouterView />
    </main>
    
  </div>

</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
/* ===========================
   BASE WEB PÚBLICA
=========================== */

.public-layout {
  font-family: 'Segoe UI', 'Lato', Roboto, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  letter-spacing: 0.2px;
}

/* ===========================
   NAVBAR
=========================== */

.navbar {
  background: #ffffff;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* ===========================
   MENÚ
=========================== */

.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
}

/* ===========================
   LOGO
=========================== */

.nav-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-logo img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: transparent;
  padding: 6px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-logo img:hover {
  transform: scale(1.15);
  box-shadow: 0 0 15px rgba(0, 153, 255, 0.35);
}

/* ===========================
   LINKS DEL MENÚ
=========================== */

.nav-link {
  display: inline-block;
  text-decoration: none;

  font-size: 18px;
  font-weight: 600;

  color: #0b3c89;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;
}

/* hover simple (sin romper diseño) */
.nav-link:hover {
  transform: scale(1.15);
}

/* subrayado animado */
.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #ffc107;
  left: 0;
  bottom: -6px;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* ===========================
   HERO
=========================== */

.hero {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.hero img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
}

.hero img:hover {
  transform: scale(1.02);
}

/* ===========================
   CONTENIDO
=========================== */

.content {
  padding: 40px;
}

</style>