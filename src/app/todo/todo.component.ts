import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [
    {
      task: 'fold clothes',
      completed: true
    },
    {
      task: 'put clothes in dresser',
      completed: true
    },
    {
      task: 'relax',
      completed: true
    },
    {
      task: 'pet cat',
      completed: false
    },
    {
      task: 'pet dog',
      completed: false
    },
    {
      task: 'be awesome',
      completed: true
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
