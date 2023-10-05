import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() nombre: string;

  constructor(){
    this.nombre =''; // En el curso no mencionan este componente vacio, pero por temas de version de codigo lo termine declarando asi para que no me marcara error en el input
  }

  ngOnInit(){}
}
