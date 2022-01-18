import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todoArray!:Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todoArray = []
  }

  toggleDone(i:number){
    this.todoArray.map((item,index)=>{
      if(index === i)
        item.done = !item.done
      
    })
  }

  handleRemove(i:number){
    this.todoArray = this.todoArray.filter((item,index)=>index !== i)
  }

  addTodo () {
    if(this.inputTodo.length > 0)
      this.todoArray.push({
        content: this.inputTodo,
        done: false
      });

    this.inputTodo = "";
  }

}
