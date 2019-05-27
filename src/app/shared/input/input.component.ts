import { Component, OnInit, Input,ContentChild, AfterContentInit} from '@angular/core';
import {NgModel} from '@angular/forms'
@Component({
  selector: 'crm-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit ,AfterContentInit {



  @Input() input:any;
  @Input() label:string;
  erroMenssage:string;

  @ContentChild(NgModel) model :NgModel
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model

    if(this.input === undefined){

      throw new Error('Esse componente precisa ser usado com uma diretina NgModel');
    }

  }

}
