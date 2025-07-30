import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type TaskObject } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
