import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  constructor() { }
  @Input() task: Task;
  @Output() delete = new EventEmitter<Task>();
  @Output() toggle = new EventEmitter<Task>();

  faTimes = faTimes
  
  onDelete(task: any){ 
    this.delete.emit(task)
  }

  onToggle(task: Task) {
    task.reminder = !task.reminder
    this.toggle.emit(task)
  }
}
