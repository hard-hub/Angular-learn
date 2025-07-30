import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { Tasks } from '../tasks';
import { FormsModule } from '@angular/forms';
import { type NewTaskObject } from '../task/task.model';
import { TaskService } from '../tasks.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string; 
  @Output() cancel = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskObject>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  private taskService = inject(TaskService);

  onCancel() {
    this.cancel.emit();    
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      date: this.enteredDate,
      summary: this.enteredSummary
    }, this.userId);
    this.cancel.emit();
  }
}
