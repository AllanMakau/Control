import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ROUTES}  from './app.routers';
import { from } from 'rxjs';
import { UsuarioConsultaComponent } from './usuario/usuario-consulta/usuario-consulta.component';
import { ResumoComponent } from './resumo/resumo.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UsuarioConsultaComponent,
    ResumoComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
