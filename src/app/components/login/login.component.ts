import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { Clientes } from 'src/app/models/clientes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]

})
export class LoginComponent implements OnInit {
  public usuarioModel: Clientes;
  public repeatPass:string = ''

  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router
    ) {
    this.usuarioModel = new Clientes(
      "",
      "",
      "",
      "",
      "",
      "",
      '',
      '',
      '',
      "",
      ''
    );
  }

  ngOnInit(): void {
  }


  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel,true).subscribe(
        (response)=>{
         console.log(response);

          localStorage.setItem("token", response.token)

          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }

  checkPass(){
    if(this.repeatPass != this.usuarioModel.password){
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas no coinciden',
        footer: 'Verifique los datos'
      })
    }else{
      this.login()
    }
  }

  login(){

    this._usuarioService.login(this.usuarioModel,false).subscribe(
      (response)=>{

        this.getTokenPromesa().then((respuesta)=>{
          localStorage.setItem("identidad", JSON.stringify(response.usuario))
          console.log(response);
          console.log(response.usuario.rol)
          Swal.fire({
            imageUrl: '../../../assets/images/index/CV_Logo.jpeg',
            imageHeight: 150,
            title: 'Bienvenido',
            text: 'Logueado exitosamente',
          })
          if(response.usuario.rol == "ROL_ADMINISTRADOR"){
            this._router.navigate(['/admin/dash-board']);
            console.log(response.usuario._id)
          }else {
            this._router.navigate(['/user/dash-board/' + response.usuario._id]);

          }
        })

      },
      (error)=>{
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: error.error.message,
          footer: '*Ingrese los datos de nuevo*'
        })
      }
    )
  }

  logOut(){
    localStorage.clear()
    //localStorage.removeItem("token")
  }


}
