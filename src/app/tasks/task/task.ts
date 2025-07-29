import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type TaskObject } from './task.model';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaskObject
  @Output() complete = new EventEmitter<string>()

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
