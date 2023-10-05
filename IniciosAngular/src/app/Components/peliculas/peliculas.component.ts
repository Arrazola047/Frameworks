import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public peliculas: Array<Pelicula>; // tambien se puede definir como Pelicula[];

  constructor(){  // Diseñado para asignar valores a las propiedades de la clase y precargar las cosas que necesitemos precargar
    console.log("Constructor lanzado");
    this.title = "Peliculas";
    this.subtitle = "La pelicula es Shrek";
    this.peliculas = [
      new Pelicula("Spiderman Across the Spiderverse", 2023, "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"),
      new Pelicula("Spiderman Into the Spiderverse", 2018,'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'),
      new Pelicula("Vengadores Endgame", 2019, 'https://cdn.milenio.com/uploads/media/2019/04/15/avengers-endgame-se-estrenara-el-2.jpg'),
      new Pelicula("TMNT Mutant Mayhem", 2023, 'https://pics.filmaffinity.com/Ninja_Turtles_Caos_mutante-718403565-large.jpg'),
      new Pelicula("Bastardos sin gloria", 2009,  'https://www.cinevistablog.com/images/bastardos-sin-gloria-poster.jpg')
    ]
  }

  ngOnInit(){   // Diseñado para contener logica, como recibir datos de un url
    console.log(this.peliculas);
    console.log("Evento OnInit lanzado");
  }

  ngDoCheck(){
    console.log("DoCheck lanzado");
  }

  cambiarTitulo(){
    this.subtitle = "Titulo de pelicula: Monster's Inc.";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }

}
