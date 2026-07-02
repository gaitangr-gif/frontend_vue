
<template>
  <!-- 
    <h1>Ingresar</h1>
    
    <label for="">Ingrese Correo: </label>
    <input type="email" v-model="credenciales.email"> {{ errors.email }}
    <br>
    <label for="">Ingrese Contraseña: </label>
    <input type="password" v-model="credenciales.password"> {{ errors.password }}
    <br>
    <br>
    <button v-on:click="funIngresar()">Ingresar</button>
    <button v-on:click="funSalir()">Salir</button>
    <br>
    <br>
    {{ credenciales }}
    <br>
    <br>
    {{ respuesta }}
  -->

    <Dialog v-model:visible="visible" modal :closable="false" :dismissableMask="false" :style="{ width: '24rem' }"
        class="saas-dialog">
        
        
        <template #header>
            <div
                style=" display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; text-align:center;">

                <Avatar image="/logo.png" shape="circle" size="xlarge" />

                <div>
                    <h2 class="text-lg font-bold">Bienvenido!</h2>
                    <p class="text-md text-gray-500">Inicia sesión en tu cuenta</p>
                </div>

            </div>

        </template>
        
       

        <div class="space-y-4 max-w-xs mx-auto">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-user"></i>
                </InputGroupAddon>
                <InputText v-model="credenciales.email" placeholder="correo electrónico" />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                     <i class="pi pi-lock"></i>
                </InputGroupAddon>
                <InputText v-model="credenciales.password" type="password" placeholder="contraseña" />
            </InputGroup>

          <div class="space-y-4 max-w-xs mx-auto">            
                <br>
                {{ errors.email }}
                <br>
                {{ errors.password }}
            </div>

        </div>


     <template #footer>
            <div class="flex w-full gap-4">
                <Button class="flex-1" severity="secondary" variant="outlined" @click="funSalir">
                    Salir
                </Button>

                <Button class="flex-1" severity="primary" @click="funIngresar">
                    Ingresar
                </Button>
            </div>
        </template>

    </Dialog>

</template>


<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'

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


//Codigo añadido para el formulario Dialog De usuario y contraseña

const visible = ref(false)

onMounted(() => {
    visible.value = true
})


async function funSalir() {
        router.push('/') // 👉 te lleva a Inicio (web pública)
}

</script>






