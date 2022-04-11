import { Injectable } from '@angular/core';
import { Character } from 'src/app/shared/models/Character.model';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Goku', power: 14500 },
    { name: 'Vegeta', power: 8500 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }
  
  addCharacter(character: Character): void {
    this._characters.push(character);
  }
}
