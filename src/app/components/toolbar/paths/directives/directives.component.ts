import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isClicked: boolean = false;
  element: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showElement() {
    this.element = !this.element
  }
  clicked() {
    this.isClicked = !this.isClicked
    console.log(this.isClicked)
  }
}
