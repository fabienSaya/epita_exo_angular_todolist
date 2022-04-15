import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  faTrashCan = faTrashCan;

  @Input() tasksTodo:Array<any> =[];

  @Output() deleteTaskEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(i:number) {
    if (window.confirm("Etes vous sûr de vouloir supprimer?")) {
      //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      this.deleteTaskEvent.emit(i);
    }
  }

  switchTaskDone(i:number) {
    this.tasksTodo[i].done=true;
  }

}
