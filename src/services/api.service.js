import axios from "axios"; //Importamos el paqueta Axios
import router from "../router"; //Puedo usar esto sino quiero el # al redireccionar a la ruta es decir si uso createWebHashHistory en el import del index.js del router


//Esta var contiene la ruta del backend
export const BASE_URL = "http://localhost:8000"; 

// Esta otra var contiene la direccion en donde el backend tiene la api
// Simplemtente concatenamos la var anterior con el string /api y se froma direccion a api del backend 
export const BASE_URL_API = `${BASE_URL}/api`; 

export default function Api(){
    //Variable que guardara el token
    const token = "ABC.XYZ.ZXC" 

    //En esta parte configuro mi peticion http
    //En cada peticion que hagamos al backend le enviaremos la ruta de la api y el token de autorizacion
    const api = axios.create({ 
        baseURL: BASE_URL_API, //indico en donde me voy a conectar
        //Esta linea la trigo de los archivos doc/rest/user.rest que cree en mi backend
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token

        }
    });

    //En esta parte del codigo colocamos interceptores en caso que sucedan errores en las peticiones
    //y eso lo configuamos en la variable api que es la que hace la peticion
    api.interceptors.response.use(
        (response) => {
            return response;
        },

        (error) => {
            // Si el error es 401. Error de autenticacion
            if (error.response?.status === 401){
                //window.location.reload(); // recarga la página completa
                //location.href = "#/auth/login" //Redirecciona a esta ruta  
                router.push('/auth/login');  //Uso aca si importo las rutas para no usar el #                            
            }

            return Promise.reject(error); // Sino hay error continua su camino
        }
    )

    return api;
}



//Este archivo nos servirá para todo el proyecto
//Lo llamaermos desde las SFC que necesiten conectar al Backend
//Y hara todas las peticiones al servidor Backend
//Lo podemos utilizar en cualquier otro proyecto tambien OJO

