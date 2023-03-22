import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  word: string = "mele";
  variabile: number = 0;

  span_style: string = "span-mio";
  rangeValue: number = 5;

  onClickUp() {
      this.variabile += 1
  }

  onClickDown() {
    this.variabile -= 1
  }

}


