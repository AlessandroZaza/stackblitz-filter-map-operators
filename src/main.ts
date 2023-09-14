import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button (click)="filterNumbers()">Filtra numeri!</button>
  `,
})
export class App {
  name = 'Angular';

  filterNumbers() {
    const numbers = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    numbers
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => value * 2) 
      )
      .subscribe((filteredValue) => console.log(filteredValue));
  }
}

bootstrapApplication(App);
