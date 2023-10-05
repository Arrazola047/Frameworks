import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  public title: string;
  public homeText = 'Bienvendio al curso de Angular';

  constructor(){
    this.title = "Ultimos Articulos"
    
  }
}
