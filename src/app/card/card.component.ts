import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://th.bing.com/th/id/R.cade15a6fc29b872e03b076c0be64766?rik=XXllrsp%2bajmv1Q&riu=http%3a%2f%2fmherman.org%2fassets%2fimg%2fblog%2fangular-logo.png&ehk=0tdhVPDy4JVhTAdLiAC0TzBdck%2bv0qBxaKR0%2bMrXQC4%3d&risl=&pid=ImgRaw&r=0";
  public titulo:string="Aprendiendo Angular";
  public sub:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis impedit molestiae laboriosam esse tenetur veritatis eum beatae. Nobis placeat a sit atque nisi esse sunt eum rerum debitis dicta?"
}
