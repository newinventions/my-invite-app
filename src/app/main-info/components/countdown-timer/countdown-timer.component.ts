import { Component, Input } from '@angular/core';
import { Time } from '../../interfaces/timer.interface';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'ctimer-countdown-timer',
  template: `
  `,
  standalone: false
})

export class CountdownTimerComponent {

  public time: Time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  @Input()
  finishDateString: string = '';

  finishDate: Date = new Date();

  constructor() { }

  public updateTime(): void {
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();

    // Calculate the time to reach the goal time (finishDate)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    // The rest will be shown as a result
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }

  // This must be executed each second
  public start(): Observable<number> {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}
