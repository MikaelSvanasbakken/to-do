import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-display-output',
  templateUrl: './display-output.component.html',
  styleUrls: ['./display-output.component.scss']
})
export class DisplayOutputComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter<string>()
  
  constructor() { }

  addItem(value: string) {
    this.addItemEvent.emit(value)
  }

  ngOnInit(): void {
  }

}
