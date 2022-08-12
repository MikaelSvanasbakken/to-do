import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  lowercasetext = 'men med pipes blir jeg uppercase' 
  object = {id: 1, navn: 'Mikael', beskrivelse: 'snakker en del'}
  ngOnInit(): void {
  }

}
