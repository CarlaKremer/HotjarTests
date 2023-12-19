import { Component } from '@angular/core';
import Hotjar from '@hotjar/browser';

const siteId = 3791279;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hotjarTests';
  constructor() {
    Hotjar.init(
      Number(siteId),
      Number(hotjarVersion)
    );
  }
}
