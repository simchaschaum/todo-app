import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.todoArray = [
      {
        content: "pick nose",
        done: false
      },
      {
        content: "poke nose",
        done: false
      }
    ]
  }

  todoArray!:Todo[];

  toggleDone(i:number){
    this.todoArray.map((item,index)=>{
      if(index === i)
        item.done = !item.done
      
    })
  }

  handleRemove(i:number){
    this.todoArray = this.todoArray.filter((item,index)=>index !== i)
  }
}
