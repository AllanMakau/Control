import { Component, OnInit } from '@angular/core';
import { cargoService } from '../cargoService';
import { Route, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crm-cargo-lista',
  templateUrl: './cargo-lista.component.html'
})
export class CargoListaComponent implements OnInit {


  cargos: Array<any[]>;

  constructor(private service: cargoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe(dados => this.cargos = dados);
  }

  excluir(id : number){
    this.service.excluir(id).subscribe(resposta => {
      this.listar();
    });
    
}

onEdit(id){
  this.router.navigate(['cargoCadastro/editar',id]);
}

}
