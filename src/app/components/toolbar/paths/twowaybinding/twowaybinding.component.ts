import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {
  person = new Person(1, 'Mikael', 'Utvikler', 'Bakt Potet')
  jobber = ['Utvikler', 'Tester', 'Arkitekt', 'Teamleader', 'Fagansvarlig']
  submitted = false

  onSubmit() {
    this.submitted = true; 
  }

  newPerson() {
    this.person = new Person(42, '', '', '')
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
