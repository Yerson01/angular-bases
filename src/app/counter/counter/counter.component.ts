import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Counter App';
  counter: number = 0;
  base: number = 5;

  increment(x: number): void {
    this.counter += x;
  }

  decrement(x: number): void {
    this.counter -= x;
  }
}
