import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  sub:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  public ArregloTarjeta: Tarjeta[]=[];

  ngOnInit():void{
    this.ArregloTarjeta = [
      {titulo:'carta 1', sub:'Subtitulo carta 1'},
      {titulo:'carta 2', sub:'Subtitulo carta 2'},
      {titulo:'carta 3', sub:'Subtitulo carta 3'}
    ]
  }
}
