import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Almacena las credenciales para luego compararlas con los valores ingresados por el usuario
  private _credenciales = { //para que solo pueda se utilizada dentro de esta clase la declaro como privada
    username : 'Jerick97',
    password: 'admin'
  }
  constructor() { }

  //Verificar el usuario y contraseña
  Login(usuario:string , password:string){
    if(usuario === this._credenciales.username && password === this._credenciales.password){ //validamos que el user y el password son iguales al objeto credenciales
      //si es correcto, lo almaceno en el localStorage
      localStorage.setItem('usuario',JSON.stringify(this._credenciales)); //debemos convertir el objeto en un Json, y el key para poder acceder a esa info es usuario
      return true //retornamos true si fue correcto
    }
    return false //false si las credenciales fueron incorrectos
  }

  //comprobamos si existe el usuario en el localStorage, si es true, el usuario tiene sesión activa
  isLogin(){
    if(localStorage.getItem('usuario')){
      return true //solo si la cuenta esta abierta devolverá true
    }
    return false 
  }

  //Cerrar Sesión
  logout(){
    localStorage.removeItem('usuario'); //eliminamos el valor con las credenciales del usuario del localStorage
  }
}
