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

  addTask(newTask:any){
    this.tasks=[newTask,...this.tasks];
  }

  deleteTask(i:number) {
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.tasks.splice(i,1);
  }

  getTasksDone() {
    return this.tasks.filter(task => task.done);
  }

  getTasksNotDone() {
    return this.tasks.filter(task => !task.done);
  }

}
