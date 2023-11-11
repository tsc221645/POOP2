import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  public identidad:any;
  constructor(
    public _router: Router
  ){}

  canActivate(){
    if(this.obtenerIdentidad().rol !== "ROL_CLIENTE"){
      this._router.navigate(['/index'])
      return false;
    }

    return true;
  }/*

  obtenerIdentidad(){
    const identidadString = localStorage.getItem('identidad');
    var identidad2 = identidadString ? JSON.parse(identidadString) : null;
         if(identidad2 != undefined){
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }*/
  obtenerIdentidad(): any {
    const identidadString = localStorage.getItem('identidad');

    if (identidadString !== null) {
      const identidad2 = JSON.parse(identidadString);
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

}
