import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isClicked: boolean = false;
  element: boolean = false;
  ngStyleBool: boolean = false
  mat: Array<string> = ['Pizza', 'Hamburger', 'Pasta']

  constructor() { }

  ngOnInit(): void {
  }

  changeNgStyle() {
    this.ngStyleBool = !this.ngStyleBool
  }
  showElement() {
    this.element = !this.element
  }
  changeNgClass() {
    this.isClicked = !this.isClicked
  }
}
