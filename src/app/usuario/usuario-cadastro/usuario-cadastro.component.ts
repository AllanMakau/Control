import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'crm-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})


export class UsuarioCadastroComponent implements OnInit {


  usuario: any;
  constructor(private usuarioService:usuarioService) { }

  ngOnInit() {
    this.usuario = {}
  }

  cadatrar(usuario){

   //   this.usuarioService.salvar(this.usuario).subscribe(resposta => {
     //   this.usuario.push(resposta);
  
       
      //});

      console.log("testando");
      console.log(usuario);


  }

}
