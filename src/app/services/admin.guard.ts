import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  public identidad: any;
  constructor(
    public _router: Router
  ){}

  canActivate(){
    if(this.obtenerIdentidad().rol == "ROL_CLIENTE"){
     this._router.navigate(['/index'])
     //console.log((false))

      return false;
    }

    //console.log((true))

    return true;
  }


    /**
     * Code generate by IA
     * Promt: I need to resolved: Argument of type 'string | null' is not assignable to parameter of type 'string'
    */
    obtenerIdentidad(): any {
      const identidadString = localStorage.getItem('identidad');
      //console.log(identidadString)
      if (identidadString !== null) {
        const identidad2 = JSON.parse(identidadString);
        this.identidad = identidad2;
      } else {
        this.identidad = null;
      }

      return this.identidad;
    }

}
