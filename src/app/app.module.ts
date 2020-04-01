import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularLabOneComponent } from './angular-lab-one/angular-lab-one.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AngularLabOneComponent, TodoComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
