import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss']
})
export class DisplayInputComponent implements OnInit {

  @Input() childValue = 0
  constructor() { }

  ngOnInit(): void {
  }

}
