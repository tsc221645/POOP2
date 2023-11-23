import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/users.service';
import { RecommendationsService } from 'src/app/services/recommendations.service';
import { Recomendaciones } from 'src/app/models/recomendaciones.model';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  providers: [RecommendationsService, UsuarioService]

})

export class RecommendationsComponent implements OnInit{
  public token:any;
  public identidad:any;
  public search:any;
  public searchRutinas:any;
  public idRecomendacion:any;

  public recomendacionesModelGet: Recomendaciones[] = [];

  public recomendacionesModelId: Recomendaciones
  public recomendacionesModelEdit: Recomendaciones
  public recomendacionesModelPost: Recomendaciones
  public recomendacionesModelIdEdit: Recomendaciones


  constructor(public _activatedRoute: ActivatedRoute,
    public _recomendacionesService: RecommendationsService,
    public _usuarioService: UsuarioService

  ) {
    this.recomendacionesModelId = new Recomendaciones('','','','','')
    this.recomendacionesModelEdit = new Recomendaciones('','','','','')
    this.recomendacionesModelPost = new Recomendaciones('','','','','')
    this.recomendacionesModelIdEdit = new Recomendaciones('','','','','')

    this.token = this._usuarioService.obtenerToken()

    this.identidad = this._usuarioService.obtenerIdentidad();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getRecomendaciones()
      //this.id = dataRuta.get('id')
    })
  }

  getRecomendaciones() {
    this._recomendacionesService.obtenerRecomendaciones().subscribe(
      (response) => {
        this.recomendacionesModelGet = response.Recomendaciones
      },
      (error) => {
        ////console.log(<any>error)
      }
    )
  }

  postRecomendaciones(agregarRecomendacion:any) {
    console.log(this.token)
    this._recomendacionesService.registrarRecomendaciones(this.recomendacionesModelPost, this.token).subscribe(

      (response) => {
        console.log( this.token)

        this.getRecomendaciones()
        agregarRecomendacion.reset()
        console.log(response)
        console.log( this.token)

        Swal.fire(
          'Se agregó correctamente la recomendación',
          '',
          'success'
        )
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.message,
          footer: 'Ingrese los datos de nuevo'
        })
      }
    )
  }

  deleteRecomendaciones(idRecomendacion:any) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la recomendación?',
      text: "Será eliminado permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._recomendacionesService.eliminarRecomendaciones(idRecomendacion, this.token).subscribe(
          (response) => {
            this.getRecomendaciones();
            Swal.fire(
              '¡Eliminación completada!',
              'El dato fue eliminado exitosamente',
              'success'
            )
          },
          (error) => {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops.',
              text: error.error.message,
            })

          }
        )

      }
    })
  }

  putRecomendaciones(idRecomendacion:any) {
    console.log(idRecomendacion)
    this._recomendacionesService.editarRecomendaciones(this.recomendacionesModelIdEdit,  this._usuarioService.obtenerToken(), idRecomendacion).subscribe({
      next: (response: any) => {  // 200
        this.getRecomendaciones();
        //console.log(response)
      },
      error: (err) => { //400 404 500 401 403
        //console.log(err)
        Swal.fire({
          icon: "error",
          title: err.error.message,
          footer: "Ingrese los datos de nuevo",
        });

      },
      complete: () => {
      }
    })
  }

  getRecomendacionesId(idRecomendacion:any) {
    this._recomendacionesService.obtenerRecomendacionesId(idRecomendacion, this.token).subscribe({

      next: (response: any) => {  // 200
        this.recomendacionesModelIdEdit = response.Recomendaciones

        //console.log(this.ejerciciosModelIdEdit)
      },
      error: (err) => { //400 404 500 401 403

      },
      complete: () => {

      }
    })
  }


  logOut() {
    //localStorage.clear()
    //localStorage.removeItem("token")
  }

}
