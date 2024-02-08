import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AutoHideToolbarComponent } from 'auto-hide-toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutoHideToolbarComponent],
  template: `
    <lib-auto-hide-toolbar [shadowPadding]="0">
      <div style="background-color: purple; padding: 5px;">
        <h1 style="margin: 0px; color: wheat;">Demo Toolbar</h1>
      </div>
    </lib-auto-hide-toolbar>

    <div>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'demo';
}
