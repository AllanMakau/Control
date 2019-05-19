import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { Observable } from 'rxjs';





@Injectable()
export class usuarioService{


    urlUsuario = API+'/usuarios'
    constructor(private http:HttpClient){

    }

    
    listar(){

        return this.http.get<any[]>( `${API}`+"/usuarios")
    }


    salvar(usuario:any){
        return this.http.post(usuario,this.urlUsuario);
      }


}