import Api from "./api.service"; //importamos el archivo que contiene la conexion al backend

//En las siguientes funciones generamos las peticiones al servidor
export default{
    //Funcion para logearse
    login(credenciales){
        return Api().post("/v1/auth/login", credenciales); //Coloco lo que falta de http://localhost:8000/api pues ya importe arriba 
    },

    //Funcion para registrar un usuario
    register(datos){
        return Api().post("/v1/auth/register", datos);
    },

    //Funcion para obtener un perfil
     perfil(){
        return Api().get("/v1/auth/profile");
    },

    //Funcion para salir
     logout(){
        return Api().post("/v1/auth/logout");
    }
}