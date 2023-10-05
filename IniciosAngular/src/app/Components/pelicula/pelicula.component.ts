import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  @Input() pelicula!: Pelicula;
  @Output() MarcarFav = new EventEmitter();

  constructor(){
  
  }

  seleccionar(event: any, pelicula: any){
    this.MarcarFav.emit({
      pelicula: pelicula
    })
  }

}
