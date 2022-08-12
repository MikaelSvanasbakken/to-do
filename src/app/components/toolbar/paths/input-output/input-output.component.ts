import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  parentValue = 0
  values = ['Element 1', 'Element 2']
  constructor() { }


  addItemParent(newItem: string) {
    this.values.push(newItem)
  }

  inc() {
    this.parentValue++
  }

  dec() {
    this.parentValue--
  }
  ngOnInit(): void {
  }

}
