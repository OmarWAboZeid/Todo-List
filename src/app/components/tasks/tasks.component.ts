import { Component } from '@angular/core';
import { Task } from 'src/Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private taskservice: TaskService, private ui: UiService) { }
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks) => this.tasks = tasks);
  } 

  deleteTask(task: Task) {
    this.taskservice.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id != task.id))
  }

  toggleTask(task: Task) {
    this.taskservice.toggleTask(task)
  }

  addTask(task:Task) {
    console.log(task)
    this.taskservice.addTask(task).subscribe((tasks) => this.tasks.push(task))
  }
}
