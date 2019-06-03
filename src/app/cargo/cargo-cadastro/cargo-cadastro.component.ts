import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { cargoService } from '../cargoService';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crm-cargo-cadastro',
  templateUrl: './cargo-cadastro.component.html'
})
export class CargoCadastroComponent implements OnInit {


  cargo : any;
  @ViewChild(NgForm) myForm: NgForm;
  constructor(private service:cargoService,
    private route:ActivatedRoute) { 

    this.cargo = new Object();

  }

  ngOnInit() {

    this.route.params.subscribe(
      (params : any) =>{
        const id = params['id']
        console.log(id)
        const cargo$  =this.service.obterPorId(id);
        cargo$.subscribe(
          cargo => {
            this.updateForm(cargo)
          }
        )
      }
    );
    
  }

  cadastrar(){
    this.service.cadastrar(this.cargo).subscribe(resposta => {
    });
    this.myForm.resetForm();
  }

  obterPorId(id){
    this.service.obterPorId(id);
  }



  editar(usuario){
      this.service.editar(this.cargo).subscribe(resposta => {
      });
  }

  updateForm( cargo){
    this.cargo.id = cargo.id
    this.cargo.descricao = cargo.descricao

  }
  

}
