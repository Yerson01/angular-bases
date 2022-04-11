import { Component } from '@angular/core';
import { Character } from 'src/app/shared/models/Character.model';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent {
  get characters(): Character[] {
    return this.dbzService.characters;
  }
  
  constructor(private dbzService: DbzService) {}

}
