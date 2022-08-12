import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss']
})
export class DisplayValueComponent implements OnInit {

  @Input() childValue = 0
  constructor() { }

  ngOnInit(): void {
  }

}
