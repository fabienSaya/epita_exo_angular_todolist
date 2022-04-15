import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tasks-done',
  templateUrl: './view-tasks-done.component.html',
  styleUrls: ['./view-tasks-done.component.css']
})
export class ViewTasksDoneComponent implements OnInit {

  @Input() tasksDone:Array<any> =[];

  constructor() { }

  ngOnInit(): void {
  }

}
