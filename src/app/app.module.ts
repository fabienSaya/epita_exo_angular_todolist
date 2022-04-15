import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ViewTasksDoneComponent } from './view-tasks-done/view-tasks-done.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ViewTasksComponent,
    ViewTasksDoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
