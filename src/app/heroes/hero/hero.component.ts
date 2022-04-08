import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  name: string = 'Iron Man';
  age: number = 43;

  get heroAlias(): string {
    return this.name.toUpperCase();
  }

  getDetails(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge() : void {
    this.age = 19;
  }
}
