import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public peliculas: Array<any>;

  constructor(){  // Diseñado para asignar valores a las propiedades de la clase y precargar las cosas que necesitemos precargar
    console.log("Constructor lanzado");
    this.title = "Peliculas";
    this.subtitle = "La pelicula es Shrek";
    this.peliculas = [
      {year: 2018, titulo: "Spiderman Into the Spiderverse", image:'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'},
      {year: 2019, titulo: "Vengadores Endgame", image:'https://cdn.milenio.com/uploads/media/2019/04/15/avengers-endgame-se-estrenara-el-2.jpg'},
      {year: 2023, titulo: "TMNT Mutant Mayhem", image:'https://pics.filmaffinity.com/Ninja_Turtles_Caos_mutante-718403565-large.jpg'},
      {year: 2009, titulo: "Bastardos sin gloria", image: 'https://www.cinevistablog.com/images/bastardos-sin-gloria-poster.jpg'}
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
