import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  sub:string;
  image:string;
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
      {titulo:'Angular básico', sub:'50 videos', image:"https://coditramuntana.com/system/image_projects/images/000/000/265/original/angular_coditramuntana.png?1553766572"},
      {titulo:'Angular intermedio', sub:'100 videos', image:"https://wallpaperaccess.com/full/3910951.png"},
      {titulo:'Angular experto', sub:'200 videos', image:"https://codewise.fr/assets/img/services/angular.png"}
    ]
  }
}
