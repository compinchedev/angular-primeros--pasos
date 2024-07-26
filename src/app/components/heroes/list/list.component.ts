import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string ;


  public heroNames: string[] = ['Spiderman', 'Thor','Hulk','She Hulk','Ironman'];



  removeLastHero():void{
   this.deletedHero =  this.heroNames.pop()
  }

}
