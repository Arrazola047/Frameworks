import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public title: string;
  public user: any;
  public campo!: string;

  constructor(){
    this.title = "Formulario",
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(){

  }

  onSubmit(){
    alert("formulario enviado");
    console.log(this.user);
  }

  hasDadoClick(){
    alert('Diste click!');
  }
  hasSalido(){
    alert('Saliste!');
  }
}
