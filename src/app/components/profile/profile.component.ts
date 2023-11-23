import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { Clientes } from 'src/app/models/clientes.model';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public token
  public identidad;
  public userModelId: Clientes;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,
    private _router: Router,

     private userRest: UsuarioService) {


  this.userModelId   = new Clientes('','','','','','','','','','','',"");
  this.token = this._usuarioService.obtenerToken();
  this.identidad = this._usuarioService.obtenerIdentidad();


   }

   public idUsuario:any;

  ngOnInit(): void {
    //console.log(this.identidad._id)
    this.getUserId(this.identidad._id)

  }


  putUser() {
    this._usuarioService.editarUsuarios(this.userModelId, this.token).subscribe(
      (response) => {
        localStorage.setItem("identidad", JSON.stringify(response.usuario))


        //console.log("Conversion 1-"+ response.usuario)
        //console.log("Conversion -"+ this._usuarioService.obtenerIdentidad())

        Swal.fire({
          icon: 'success',
          text: 'Su perfil ha sido actualizado',
          footer: 'Gracias por preferir NGT '

        })

        this.getUserId(this.idUsuario)

        this.identidad = this._usuarioService.obtenerIdentidad();
      },
      (error) => {
        //.log(<any>error);

        ////console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.message,
          footer: 'Ingrese los datos de nuevo'
        })
      }
    )
  }

  getUserId(idUser:any) {
    this._usuarioService.obtenerUsuariosId(idUser, this.token).subscribe(
      (response) => {
        this.userModelId = response.clienteEncontrado;

        ////console.log(response);
        ////console.log(this.empresaModelId);
      },
      (error) => {
        ////console.log(<any>error)
      }
    )
  }


  deleteUser() {
    Swal.fire({
     title: '¿Está seguro que desea eliminar su cuenta?',
     text: "Este usuario será eliminado permanentemente",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: '¡Si, estoy seguro!'
   }).then((result) => {
     if (result.isConfirmed) {
       this._usuarioService.eliminarUsuarios(this.identidad._id, this.token).subscribe(
         (response)=>{

           Swal.fire(
             '¡Eliminado!',
             'El usuario fue eliminado con éxito',
             'success'
           )
           localStorage.clear()
           this._router.navigate(['/inicio']);
         },
         (error)=>{
           Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: error.error.message,
           })

         }
       )

     }
   })

 }

 logOut(){
  localStorage.clear()
}

}
