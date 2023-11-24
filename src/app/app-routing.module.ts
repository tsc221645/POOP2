import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DefaultAdminComponent } from './components/default-admin/default-admin.component';
import { AdminGuard } from './services/admin.guard';
import { DefaultRouterComponent } from './components/default-router/default-router.component';
import { UsuarioGuard } from './services/users.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dash-board', component: DashBoardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'recommendations', component: RecommendationsComponent},


  { path: 'admin',  component: DefaultAdminComponent, canActivate: [AdminGuard]  ,children: [
    {path: 'dash-board/:idUsuario', component: DashBoardComponent},
    {path: 'recommendations/:idUsuario', component: RecommendationsComponent}



  ]},
  { path: 'user',  component: DefaultRouterComponent, canActivate: [UsuarioGuard]  ,children: [
    {path: 'dash-board/:idUsuario', component: DashBoardComponent},
    {path: 'recommendations/:idUsuario', component: RecommendationsComponent},
    {path: 'profile/:idUsuario', component: ProfileComponent}



  ]},

    //Ruta final, redirecciona si no existe la ruta.
    { path: '**', component: IndexComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
