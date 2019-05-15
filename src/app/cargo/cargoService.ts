import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { API } from '../app.api';
import { Cargo } from './Cargo';
import {ErrorHandler} from '../app.error-handler';



@Injectable()
export class cargoService {

    constructor(private http:HttpClient){

      
    }

    cargos(search?: string): Observable<Cargo[]> {
        return this.http.get(`${API}/cargos`, {params: {q: search}})
          .map(response => response.json())
          .catch(ErrorHandler.handleError)
      }
  
}