import { Component, Input, OnInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'minfo-principal-page',
  templateUrl: 'principal.component.html',
  styleUrl: 'principal.component.css',
  standalone: false
})

export class PrincipalComponent implements OnInit {

  message: string = "";
  currentDay: number = 0;
  currentHour: number = 0;
  currentMinute: number = 0;
  currentSecond: number = 0;
  // Coming from main-info
  @Input()
  myHostName: string[] = [''];
  @Input()
  myEventName: string = '';
  @Input()
  myEventDay: string = '';
  @Input()
  myLabelDays: string = '';
  @Input()
  myLabelHours: string = '';
  @Input()
  myLabelMinutes: string = '';
  @Input()
  myLabelSeconds: string = '';

  constructor (
    private timer: CountdownTimerComponent
  ) {}

  ngOnInit(): void {
    // Initialize time with 0
    this.timer.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
    // Now, set the finishDate  in string format YYYY-MM-dd HH:mm:ss
    this.timer.finishDate = new Date(this.myEventDay);

    //this.start().subscribe(_ => console.log("tik"))
    let counterTimer$ = this.timer.start().subscribe((_) => {
      if ((this.timer.time.days == -1) && (this.timer.time.hours >= 12)) {
        this.timer.time = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Disfruta la fiesta junto a nosotros!";
      } else if ((this.timer.time.days == -1) && (this.timer.time.hours < 12)) {
        this.timer.time = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Fue una gran fiesta! Descansemos un poco.";
      } else if (this.timer.time.days < -1) {
        this.timer.time = {
          days: -2,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Gracias por acompañarnos! Deseamos que hayas disfrutado estos momentos con nosotros.";
        counterTimer$.unsubscribe();
      }
      this.currentDay = this.timer.time.days;
      this.currentHour = this.timer.time.hours;
      this.currentMinute = this.timer.time.minutes;
      this.currentSecond = this.timer.time.seconds;
    });
  }
}
