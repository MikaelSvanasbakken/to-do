import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  timerObservable!: Observable<number>;
  private subscription: Subscription = new Subscription();
  ngOnInit() {
    this.timerObservable = new Observable<number>(subscriber => {
      let i = 0;
      const interval = setInterval(() => {
        subscriber.next(i++);
      }, 1000);
      return () => clearInterval(interval);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  
  }
  subscribeToTimer() {
    this.subscription.add(
      this.timerObservable.subscribe({
        next: (value: number) => console.log(value)
      })
    );
  }
  
}

