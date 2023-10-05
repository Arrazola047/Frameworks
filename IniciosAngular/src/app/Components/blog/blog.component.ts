import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @Input() nombre: string;

  public title: string;

  constructor(){
    this.title = "Blog",
    this.nombre = ""
  }
}
