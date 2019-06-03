import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';




@Injectable()
export class cargoService {


    urlCargo = API+'/cargos'
    constructor(private http:HttpClient){

      
    }

    listar(){
        return this.http.get<any[]>( `${this.urlCargo}`);
    }

    cadastrar(cargo:any){
        console.log("Service")
        if(cargo.id == null){

            return this.http.post(this.urlCargo,cargo);
        }else {
            return this.http.put(this.urlCargo,cargo);
        }
        
      }
    editar(cargo:any){
        return this.http.put(this.urlCargo,cargo);
    }

    excluir(id:number){
        console.log("service exluir")
        return this.http.delete(this.urlCargo+"/"+id);
    }

    obterPorId(id){

        return this.http.get(this.urlCargo+"/"+id);
    }
}