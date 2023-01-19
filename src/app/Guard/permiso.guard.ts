import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  constructor(private router:Router, private usuarioService:UsersService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.usuarioService.isLogin()) { //si existe el usuario en el localStorage
      return true;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Para Ver Esto debes Iniciar Sesión'
    })
    this.router.navigate(['/']); //si cerro sesión o intenta ingresar a una ruta sin login redirigir al login
    return false;
  }
}
