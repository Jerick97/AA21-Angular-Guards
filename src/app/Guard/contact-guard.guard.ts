import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'



//método de salida que retorna un boolean 
export interface onExit{
  onExit:() => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

@Injectable({
  providedIn: 'root',
})

export class ContactGuardGuard implements CanDeactivate<unknown> { //le indicamos el componente que validara
  canDeactivate(
    component: onExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.onExit ? component.onExit() : true; //si implementaron nuestra interface onExit, sino lo dejamos salir
    }
  
}
