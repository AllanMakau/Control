import { Component, OnInit, ViewChild } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms'
import { user } from '../usuariomodel';



@Component({
  selector: 'crm-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})


export class UsuarioCadastroComponent implements OnInit {


  usuario : user;
  @ViewChild(NgForm) myForm: NgForm;
  constructor(private usuarioService:usuarioService) {
    this.usuario = new user();
  }
            
             


  ngOnInit() {

    
  }

  cadastrar(){
      this.usuarioService.cadastrar(this.usuario).subscribe(resposta => {
      });
      this.myForm.resetForm();
  }

  editar(){
      this.usuarioService.editar(this.usuario).subscribe(resposta => {
      });
  }

  


}
