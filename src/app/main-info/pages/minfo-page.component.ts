import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../components/countdown-timer/countdown-timer.component';
import { MainInfoService } from '../services/main-info.service';

@Component({
  selector: 'main-info-page',
  templateUrl: 'minfo-page.component.html',
  standalone: false
})

export class MinfoComponent {

  message: string = "";
  currentDay: number = 0;
  currentHour: number = 0;
  currentMinute: number = 0;
  currentSecond: number = 0;

  constructor(
    private timer: CountdownTimerComponent,
    private service: MainInfoService
  ) { }

  get hostName(): string[] {
    return this.service.hostName;
  }

  get eventName(): string {
    return this.service.eventName;
  }

  get eventDay(): string {
    return this.service.eventDay;
  }

  get labelDays(): string {
    return this.service.labelDays;
  }

  get labelHours(): string {
    return this.service.labelHours;
  }

  get labelMinutes(): string {
    return this.service.labelMinutes;
  }

  get labelSeconds(): string {
    return this.service.labelSeconds;
  }
}
