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
        if(usuario.id == null){
            console.log("cadastrando")
            return this.http.post(this.urlUsuario,usuario);
        }else {
            console.log("Editando")
            return this.http.put(this.urlUsuario,usuario);
        }
        
      }

    editar(usuario:user){
        return this.http.put(this.urlUsuario,usuario);
    }

    excluir(id:number){
        return this.http.delete(this.urlUsuario+"/"+id);
    }

    obterPorId(id){

        return this.http.get(this.urlUsuario+"/"+id);
    }

}