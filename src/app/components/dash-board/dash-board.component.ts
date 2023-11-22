import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  providers: [UsuarioService]

})
export class DashBoardComponent implements OnInit{
  public token:any;
  public identidad:any;

  ngOnInit(): void {
    console.log(this.identidad)
    console.log(this.token)

    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
    })
  }

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,


      )

    {


    this.token = this._usuarioService.obtenerToken()
    this.identidad = this._usuarioService.obtenerIdentidad();

  }

  logOut() {
    //localStorage.clear()
    //localStorage.removeItem("token")
  }
}
