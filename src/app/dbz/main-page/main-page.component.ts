import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/Character.model';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  character: Character = {
    name: '',
    power: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
