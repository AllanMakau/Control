import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'crm-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})


export class UsuarioCadastroComponent implements OnInit {


  private usuario: any[]

  
  constructor(private usuarioService:usuarioService) { 

    this.usuario

    /*
this.usuario = 
  
                  {
                  "nome":"Alan lima", 
                  "login":"ajlima", 
                  "senha":"123456", 
                  "email":"alan.makau@gmail.com",
                  "funcional":"GHGTR"}
        */        

       
              }

 

  ngOnInit() {

    
  }

  cadastrar(usuario){
    console.log(usuario);
      this.usuarioService.salvar(usuario).subscribe(resposta => {
       this.usuario.push(resposta);
  
       
      });
  }


  alerta(){

    alert('alertando')
  }
}
