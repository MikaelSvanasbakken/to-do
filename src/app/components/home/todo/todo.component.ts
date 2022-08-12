import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces/item';
import { map } from 'rxjs';
import { HttpService } from 'src/services/http-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  toDoList: Item[] = [
    {
      description: 'Clean the apartment',
      done: false,
    },
    {
      description: 'Procrastinate',
      done: true,
    },
    {
      description: 'Clap the cat 😺',
      done: true,
    },
  ];

  todoValue: string = ''
  
   constructor(private httpClient: HttpService) {}

  ngOnInit(): void {
  }
  completeItem(index: number) {
    this.toDoList[index].done = true
  }
  grabRandomActivity() {
    this.httpClient.fetchActivity().pipe(map(x => this.addToList(x.activity))).subscribe()
  }
  addToList(value: string) {
  this.toDoList.unshift({
    description: value,
    done: false
  })
}
}
