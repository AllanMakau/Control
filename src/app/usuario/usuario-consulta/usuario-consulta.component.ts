import { Component, OnInit } from '@angular/core';
import { usuarioService } from '../usuarioService';
import { UsuarioCadastroComponent } from '../usuario-cadastro/usuario-cadastro.component';
import { user } from '../usuariomodel';
import { Route, Routes, Router, ActivatedRoute } from '@angular/router';


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
  this.router.navigate(['editar',id]);
}

  
}
