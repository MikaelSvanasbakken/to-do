import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})


export class SignalComponent {
  count = signal(0)
  computedCount = computed(() => this.count() * 2)
  
   increment = () => {
    this.count.update(value => value + 1)
  }
   decrement = () => {
    this.count.update(value => value - 1)
  }

 

}
