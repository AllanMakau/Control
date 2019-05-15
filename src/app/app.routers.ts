import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsuarioConsultaComponent } from './usuario/usuario-consulta/usuario-consulta.component';
import { ResumoComponent } from './resumo/resumo.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { CargoListaComponent } from './cargo/cargo-lista/cargo-lista.component';


export const ROUTES: Routes = [

    {path: '' , component: HomeComponent},
    {path: 'about' , component: AboutComponent},
    {path: 'usuarioConsulta' , component: UsuarioConsultaComponent},
    {path: 'resumo' , component: ResumoComponent},
    {path: 'usuarioCadastro' , component: UsuarioCadastroComponent},
    {path: 'cargoLista' , component: CargoListaComponent}
]