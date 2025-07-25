import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { log } from 'console';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  
  get imagePath() {
    return "assests/users/" + this.selectedUser.avatar;
  }

  onSelectUser() {
    //console.log('clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
