import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private ui: UiService, private router: Router) { 
    this.subscription = this.ui.onToggle().subscribe(value => this.showAddTask = value)
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
  ngOnInit(): void {}

  toggleAddTask() {
    this.ui.toggleAddTask()
  }
}
