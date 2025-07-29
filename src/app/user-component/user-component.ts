import { Component, computed, Input, input, Output, signal, EventEmitter, output } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';
import { log } from 'console';
//import { EventEmitter } from 'stream';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>()

  get imagePath() {
    return 'assests/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
// avatar = input.required<string>();
  // name = input.required<string>();
  //   select = output<string>()

  // imagePath = computed(() => {
  //   return 'assests/users/' + this.avatar();
  // })

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  //imagePath = computed(() => 'assests/users/' + this.selectedUser().avatar);
  // what's the issue with this code, like what if I don't want to use Compute
  // get imagePath() {
  //   return "assests/users/" + this.selectedUser().avatar;
  // }

    // this.avatar.set() -- you can't perform this if you use signal inputs, why.?
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];