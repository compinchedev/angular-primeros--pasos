import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {




  public name: string= 'Ironman';

  public age: number= 45;


get capitalizedName():string{


  return this.name.toUpperCase();

}

getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}

changeHero():void{


  this.name = 'Spiderman';
  console.log('cambio de nombre a: ', this.name);

}

changeAge(){
this.age= 100;

console.log('nueva edad', this.age);

}


}
