import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';




@Injectable()
export class cargoService {

    constructor(private http:HttpClient){

      
    }

    listar(){
 
        return this.http.get<any[]>( `${API}`+"/redes");
    }
}