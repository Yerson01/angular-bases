import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Captain America'];
  deletedHero: string = '';

  constructor() {}

  ngOnInit(): void {}

  deleteHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }
}
