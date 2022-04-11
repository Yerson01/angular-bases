import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/shared/models/Character.model';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  @Input() character: Character = {
    name: '',
    power: 0,
  };

  @Output() onAddCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  onAdd(): void {
    const isInvalid = this.character.name.trim().length === 0;

    if (isInvalid) return;

    this.dbzService.addCharacter(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
