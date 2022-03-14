import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  buttonClicked = 0;
  logButtonClicked = [];

  toggleSecret () {
    this.buttonClicked++;
    this.logButtonClicked.push(this.buttonClicked);
    this.showSecret = !this.showSecret;
  }

  // getColor() {
  //   return this.logButtonClicked.length > 5 ? 'blue' : 'transparent';
  // }
}
