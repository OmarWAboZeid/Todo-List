import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() submitEvent = new EventEmitter<Task>()

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean;

 constructor(private ui: UiService) { }

 ngOnInit():void {
  this.ui.onToggle().subscribe(value => this.showAddTask = value)
 }
 onSubmit() {
  if(!this.text) {
    alert('please add text')
    return;
  }

  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  }

  this.submitEvent.emit(newTask);
  
  this.text = ''
  this.day = ''
  this.reminder = false

 }
}
