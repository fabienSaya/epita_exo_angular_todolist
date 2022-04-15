import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  @Input() tasks:Array<any> =[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(i:number) {
    if (window.confirm("Etes vous sûr de vouloir supprimer?")) {
      //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      this.tasks.splice(i,1);
    }
  }

}
