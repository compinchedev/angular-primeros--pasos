import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  private dbzService: DBZService = inject(DBZService);
  constructor() {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
