import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  type OnInit,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent implements OnInit {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  ngOnInit(): void {}

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
  }
}
