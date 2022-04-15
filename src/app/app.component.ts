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


}
