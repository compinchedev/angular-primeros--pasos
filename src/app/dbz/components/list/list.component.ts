import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input()
  public characterList: Character[] = [];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
  trackByFn(item: any) {
    return item.id; // Cambia 'id' por el campo único de cada elemento en tu arreglo
  }
}
