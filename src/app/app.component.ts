import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <app-user></app-user>
  <app-about></app-about>
  `
})
export class AppComponent {
  title = 'Git-Finder';
}
