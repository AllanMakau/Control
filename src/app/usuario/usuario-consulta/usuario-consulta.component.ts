import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';


@Component({
  selector: 'crm-usuario-consulta',
  templateUrl: './usuario-consulta.component.html'
})
export class UsuarioConsultaComponent implements OnInit {


  usuarios: Array<any[]>;

  constructor(private usuarioService:usuarioService) { }

  ngOnInit() {

      this.listar();
  }


  listar(){

    this.usuarioService.listar().subscribe(dados => this.usuarios = dados);
  }

}
