import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { Tasks } from '../tasks';
import { FormsModule } from '@angular/forms';
import { type NewTaskObject } from '../task/task.model';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskObject>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.cancel.emit();    
  }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
