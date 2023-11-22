import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mis-componentes/mi-componente/mi-componente.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DefaultAdminComponent } from './components/default-admin/default-admin.component';
import { DefaultRouterComponent } from './components/default-router/default-router.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    FooterComponent,
    DashBoardComponent,
    DefaultAdminComponent,
    DefaultRouterComponent,
    EditProfileComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
