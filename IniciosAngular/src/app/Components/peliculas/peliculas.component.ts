import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public titulo: string;

  constructor(){  // Diseñado para asignar valores a las propiedades de la clase y precargar las cosas que necesitemos precargar
    console.log("Constructor lanzado");
    this.titulo = "Titulo de pelicula: Shrek";
  }

  ngOnInit(){   // Diseñado para contener logica, como recibir datos de un url
    console.log("Evento OnInit lanzado");
  }

  ngDoCheck(){
    console.log("DoCheck lanzado");
  }

  cambiarTitulo(){
    this.titulo = "Titulo de pelicula: Monster's Inc.";
  }
}
