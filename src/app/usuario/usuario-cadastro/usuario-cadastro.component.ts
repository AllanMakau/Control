import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from '../usuariomodel';



@Component({
  selector: 'crm-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})


export class UsuarioCadastroComponent implements OnInit {


  usuario : user;
   
  constructor(private usuarioService:usuarioService) {
    this.usuario = new user();
  }
            
             


  ngOnInit() {

    
  }

  cadastrar(){
      this.usuarioService.cadastrar(this.usuario).subscribe(resposta => {
      });
  }

  editar(){
      this.usuarioService.editar(this.usuario).subscribe(resposta => {
      });
  }

  


}
