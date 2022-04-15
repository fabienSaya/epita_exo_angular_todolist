import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    //https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
    let userInput = window.prompt("ajouter une tache","undefined");
    if (userInput!=null && userInput!='undefined') {
      let newTask ={title: userInput, done:false};
      //this.tasks.push(newTask);
      //this.tasks=[newTask,...this.tasks];
      this.newItemEvent.emit(newTask);
    }
  }

}
