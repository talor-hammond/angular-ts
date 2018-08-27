import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name = 'Tay'
  todoList = ['Add more todos']
  newItem = ''

  constructor() {

  }

  ngOnInit() {
  }

  updateItem(e: any) {
    console.log(e.target.value)
  }

}
