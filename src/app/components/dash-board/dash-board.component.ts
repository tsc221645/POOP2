import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/users.service';
import Swal from "sweetalert2";
import { Clientes } from '../../models/clientes.model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  providers: [UsuarioService]

})
export class DashBoardComponent implements OnInit{

  public token:any;
  public identidad:any;
  public usuarioModelId: Clientes;


  ngOnInit(): void {
   // console.log(this.identidad)
    //console.log(this.token)

    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
    })
  }

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,


      )

    {

    this.usuarioModelId = new Clientes('','','','','','','','','','','','');

    this.token = this._usuarioService.obtenerToken()
    this.identidad = this._usuarioService.obtenerIdentidad();

  }

  logOut() {
    localStorage.clear()
    //localStorage.removeItem("token")
  }


  putSuscripcionNormal() {
    this._usuarioService.suscripcionNormal(this.usuarioModelId, this.token).subscribe(
      (response) => {
        Swal.fire({
          title: '¿Está seguro que desea adquirir una suscripción NORMAL?',
          text: "Contará con un servicio de calidad y estándar",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Si, estoy seguro!'
        }).then((result) => {
          if (result.isConfirmed) {

            localStorage.setItem("identidad", JSON.stringify(response.Usuario))

            Swal.fire({
              imageUrl: '../../../assets/images/index/CV_Logo.jpeg',
              imageHeight: 150,
              text: ' Ha adquirido una suscripción Normal. Puede visualizar sus CV y crear uno más.',

              footer: 'Gracias por preferir CVBuilder'
            })

            this.identidad = this._usuarioService.obtenerIdentidad();

          }
        })


      },
      (error) => {
        console.log(<any>error);

        //////console.log(<any>error);
        Swal.fire({
          imageUrl: '../../../assets/images/index/CV_Logo.jpeg',
          imageHeight: 1500,
          title: error.error.message,
          footer: 'Ingrese los datos de nuevo'
        })
      }
    )
  }

  putSuscripcionPremium() {
    this._usuarioService.suscripcionPremium(this.usuarioModelId, this.token).subscribe(
      (response) => {

        Swal.fire({
          title: '¿Está seguro que desea adquirir una suscripción PREMIUM?',
          text: "Contará con mayor acceso y beneficios para crear más y mejores CV",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Si, estoy seguro!'
        }).then((result) => {
          if (result.isConfirmed) {

            localStorage.setItem("identidad", JSON.stringify(response.Usuario))
            Swal.fire({
              imageUrl: '../../../assets/images/index/CV_Logo.jpeg',
              imageHeight: 150,
              text: '¡Felicidades! Ha adquirido una suscripción Premium. Ahora tendrá un servicio extendido y personalizado.',

              footer: 'Gracias por preferir CVBuilder'
            })

            this.identidad = this._usuarioService.obtenerIdentidad();

          }
        })


      },
      (error) => {
        console.log(<any>error);

        //////console.log(<any>error);
        Swal.fire({

          icon: 'error',
          title: error.error.message,
          footer: 'Ingrese los datos de nuevo'
        })
      }
    )
  }


  putFormulario() {

        Swal.fire({
          title: '¿Está seguro que desea guardar su información?',
          text: "Se generará un CV en formato PDF",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Si, estoy seguro!'
        }).then((result) => {
          if (result.isConfirmed) {

            Swal.fire({
              imageUrl: '../../../assets/images/index/CV_Logo.jpeg',
              imageHeight: 150,
              text: '¡Felicidades! Ha generado su CV',

              footer: 'Gracias por preferir CVBuilder'
            })

            this.identidad = this._usuarioService.obtenerIdentidad();

          }
        })

  }

  dowloadPDF(){
    Swal.fire(
      '¡PDF generado!',
      'EL CV fue generado correctamente',
      'success'
    )
  }

}
