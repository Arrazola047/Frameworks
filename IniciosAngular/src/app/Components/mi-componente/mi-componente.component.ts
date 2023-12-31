import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html' 
}) // IMPORTANTE!!!!!!!!    Aqui no va punto y coma (;) por que el agregarlo va a traer problemas al funcionamiento del codigo

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo, soy componente Rick!";
        this.comentario = "Soy el comentario con mas likes";
        this.year = 2023;
        this.mostrarPeliculas = true;

        console.log("Mi componente funciona!");
        console.log(this.titulo);
        console.log(this.comentario);
        console.log(this.year);
    }

    ocultarPelicula(){
        this.mostrarPeliculas = false;
    }
}
