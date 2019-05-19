import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ROUTES}  from './app.routers';
import { UsuarioConsultaComponent } from './usuario/usuario-consulta/usuario-consulta.component';
import { ResumoComponent } from './resumo/resumo.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { CargoCadastroComponent } from './cargo/cargo-cadastro/cargo-cadastro.component';
import { CargoListaComponent } from './cargo/cargo-lista/cargo-lista.component';
import { cargoService } from './cargo/cargoService';
import { usuarioService } from './usuario/usuarioService';



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
    UsuarioCadastroComponent,
    CargoCadastroComponent,
    CargoListaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [cargoService, usuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
