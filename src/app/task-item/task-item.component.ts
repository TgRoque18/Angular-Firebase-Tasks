import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() performTask = new EventEmitter<Task>();

  /*
    @Input('myTask') task: Task;
    <app-task-item [myTask]="t" (selectTask)="onSelectTask($event)"></app-task-item>
  */

  executeAction(action: string): void {
    this[action].emit(this.task);
  }

}
