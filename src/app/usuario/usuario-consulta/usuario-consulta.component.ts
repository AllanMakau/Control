import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { user } from '../usuariomodel';
import { Route, Routes, Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';


@Component({
  selector: 'crm-usuario-consulta',
  templateUrl: './usuario-consulta.component.html'
})
export class UsuarioConsultaComponent implements OnInit {


  usuarios: Array<user[]>;



  constructor(private usuarioService:usuarioService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
      this.listar();
  }


  listar(){
    this.usuarioService.listar().subscribe(dados => this.usuarios = dados);
  }

  excluir(id : number){
    this.usuarioService.excluir(id).subscribe(resposta => {
      this.listar();
    });
    
}

onEdit(id){
  this.router.navigate(['usuarioCadastro/editar/',id]);
}

  
}
