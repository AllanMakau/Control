import { Component, OnInit, ViewChild } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { Route, ActivatedRoute } from '@angular/router';
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
  constructor(
    private usuarioService:usuarioService,
    private route:ActivatedRoute) {
    this.usuario = new user();
  }
            
             


  ngOnInit() {

    this.route.params.subscribe(
      (params : any) =>{
        const id = params['id']
        console.log(id)
        const usuario$  =this.usuarioService.obterPorId(id);
        usuario$.subscribe(
          usuario => {
            this.updateForm(usuario)
          }
        )
      }
    );
    
  }
  obterPorId(id){
    this.usuarioService.obterPorId(id);
  }

  cadastrar(){
      this.usuarioService.cadastrar(this.usuario).subscribe(resposta => {
      });
      this.myForm.resetForm();
  }

  editar(usuario){
      this.usuarioService.editar(this.usuario).subscribe(resposta => {
      });
  }

  updateForm(usuario){
    this.usuario.id = usuario.id
    this.usuario.nome = usuario.nome
    this.usuario.email = usuario.email
    this.usuario.funcional = usuario.funcional
    this.usuario.senha = usuario.senha
    this.usuario.login = usuario.login
  }

  


}
