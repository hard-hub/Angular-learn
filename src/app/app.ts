import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { UserComponent } from './user-component/user-component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
