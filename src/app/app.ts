import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-component/header-component";
import { UserComponent } from './user-component/user-component';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
//import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id:string) {
    //console.log(id);
    this.selectedUserId = id;
  }
}
