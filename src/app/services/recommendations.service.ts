import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recomendaciones } from '../models/recomendaciones.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  private baseUrl = 'http://127.0.0.1:3000/api';


  constructor(public _http: HttpClient) { }


  obtenerRecomendaciones(): Observable<any> {
      return this._http.get(`${this.baseUrl}/recomendaciones/`)
  }

  obtenerRecomendacionesId(idRecomendacion:any, token:any): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', token)
      return this._http.get(this.baseUrl + '/recomendacionId/' + idRecomendacion, { headers: headersToken })
  }

  registrarRecomendaciones(modeloRecomendaciones: Recomendaciones, token:any): Observable<any> {
      console.log(token)
      let headersToken = this.headersVariable.set('Authorization', token)
      let parametros = JSON.stringify(modeloRecomendaciones)
      return this._http.post(`${this.baseUrl}/agregarRecomendacion`, parametros, { headers: headersToken })
  }

    editarRecomendaciones(modeloRecomendaciones: Recomendaciones, token:any, idRecomendacion:any): Observable<any>{
      let headersToken = this.headersVariable.set('Authorization', token)
      let parametros = JSON.stringify(modeloRecomendaciones)
      return this._http.put(this.baseUrl + '/editarRecomendacion/' + idRecomendacion, parametros, {headers:headersToken})
    }

    eliminarRecomendaciones(id : String, token:any): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', token)
      return this._http.delete(this.baseUrl + '/eliminarRecomendacion/' + id, { headers: headersToken })
    }
}
