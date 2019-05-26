import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { Observable } from 'rxjs';
import { user } from './usuariomodel';





@Injectable()
export class usuarioService{


    urlUsuario = API+'/usuarios'
    constructor(private http:HttpClient){

    }

    
    listar(){
        return this.http.get<any[]>( `${API}`+"/usuarios")
    }


    cadastrar(usuario:user){
        return this.http.post(this.urlUsuario,usuario);
      }

    editar(usuario:user){
        return this.http.put(this.urlUsuario,usuario);
    }

}