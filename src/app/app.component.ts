import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String="Gestionnaire de tâches";

  tasks:Array<any> = [
    { title: 'Installer le CLI', done: false },
    { title: 'Prendre un café', done: false },
    { title: 'Créer une todo list', done: true },
  ];


  addTask(){
    //https://developer.mozilla.org/fr/docs/Web/API/Window/prompt
    let newTaskTitle = window.prompt("ajouter une tache","undefined");
    if (newTaskTitle!=undefined) {
      let newTask ={title: newTaskTitle, done:false};
      //this.tasks.push(newTask);
      this.tasks=[...this.tasks,newTask]
    }
  }

  deleteTask(i:number) {
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.tasks.splice(i,1);
  }



}
