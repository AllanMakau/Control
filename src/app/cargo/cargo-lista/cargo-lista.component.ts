import { Component, OnInit } from '@angular/core';
import { cargoService } from '../cargoService';

@Component({
  selector: 'crm-cargo-lista',
  templateUrl: './cargo-lista.component.html'
})
export class CargoListaComponent implements OnInit {


  cargos: Array<any[]>;

  constructor(private cargoService: cargoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){

    this.cargoService.listar().subscribe(dados => this.cargos = dados);
  }

}
