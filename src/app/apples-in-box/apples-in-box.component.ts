import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apples-in-box',
  template: '<h1>{{infoAboutApples}}</h1>',
})

export class ApplesCompenent {
  @Input() infoAboutApples: string;
}
