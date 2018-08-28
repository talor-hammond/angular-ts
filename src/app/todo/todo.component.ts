import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: String
  todos: any
  doneTodos: any
  newItem: String

  constructor() {
    this.name = 'Tay'
    this.todos = []
    this.doneTodos = []
    this.newItem = ''
  }

  ngOnInit() {
  }

  onItemAdded() {
    const todoObj = {
      title: this.newItem,
      completed: false
    }
    this.todos.push(todoObj)
  }

  onTodoDone(index) {
    const doneTodo = this.todos[index]

    this.todos.splice(index, 1)
    this.doneTodos.push(doneTodo)
  }

}
