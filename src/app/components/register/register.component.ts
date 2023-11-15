import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes.model';
import { UsuarioService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ UsuarioService]

})

export class RegisterComponent {
  public token;
  public repeatPass:string = ''

  public usuarioModel: Clientes = new Clientes('', '', '', '', '', '', '', '', '', '', '');
  public usuariosModelPost: Clientes;
  constructor( private _usuarioService: UsuarioService, private _router: Router) {
    this.usuariosModelPost = new Clientes('','', '', '', '', '','', '', '','', '')
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
  }

  checkPass(){
    if(this.repeatPass != this.usuariosModelPost.password){
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas, no coinciden',
        footer: 'Verifique los datos'
      })
    }else{
      this.postUsers()
    }
  }

  postUsers() {
    this._usuarioService.agregarUsuario(this.usuariosModelPost).subscribe(
      (response) => {
        localStorage.setItem("identidad", JSON.stringify(response.usuario))
        console.log(response);
          this._router.navigate(['/login']);
          Swal.fire({
            icon: 'success',
            title: 'Su cuenta ha sido creada con exito',
          })
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error.error.message,
          footer: '*Ingrese los datos de nuevo*'
        })
      }
    )
  }
}
