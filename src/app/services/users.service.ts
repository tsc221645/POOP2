import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad:any;
  public token:any;
  private baseUrl = 'http://127.0.0.1:3000/api';


  constructor(public _http: HttpClient) { }

  login(usuario:any, obtenerToken:String): Observable<any> {

    let params = JSON.stringify(usuario);
    if(obtenerToken != "true"){
      usuario.obtenerToken = obtenerToken;
      usuario.obtenerToken = "true";

    }
    return this._http.post(this.baseUrl + '/login', params, {headers: this.headersVariable});
  }


  ObtenerUsuarioLogueado(token:any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(`${this.baseUrl}/usuarioLogueado`, { headers: headersToken });
  }


  obtenerToken(){

    this.ObtenerUsuarioLogueado(this.token)

    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }



  obtenerIdentidad(){
    const identidadString = localStorage.getItem('identidad');
    var identidad2 = identidadString ? JSON.parse(identidadString) : null;
    if(identidad2 != undefined){
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  agregarUsuario(modeloUsuario: Clientes): Observable<any> {
    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(`${this.baseUrl}/agregarCliente`, parametros, { headers: this.headersVariable });
  }

  editarUsuarios(modeloUsuario: Clientes, token:any): Observable<any> {
    let parametros = JSON.stringify(modeloUsuario);
    let headersToken = this.headersVariable.set('Authorization', token);
    //console.log("  --- "+modeloUsuario._id)

    return this._http.put(`${this.baseUrl}/editarUsuario/` + modeloUsuario._id, parametros, { headers: headersToken })
  }

  obtenerUsuariosId(id:String, token:any): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(`${this.baseUrl}/usuariosId/` + id, {headers: headersToken})
  }

  eliminarUsuarios(id : String, token:any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.delete(`${this.baseUrl}/eliminarUsuario/` + id, { headers: headersToken })
  }



}
