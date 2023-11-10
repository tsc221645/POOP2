import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DefaultAdminComponent } from './components/default-admin/default-admin.component';
import { AdminGuard } from './services/admin.guard';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dash-board', component: DashBoardComponent},

  { path: '**', component: IndexComponent },

  { path: 'admin',  component: DefaultAdminComponent, canActivate: [AdminGuard]  ,children: [

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
