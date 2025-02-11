import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService {
  hostName: string[] = ['OBDU','&','LUIS'];
  eventName: string = 'NUESTRA BODA';
  eventDay: string = '2025-07-19 13:00:00';
  labelDays: string = 'Días';
  labelHours: string = 'Horas';
  labelMinutes: string = 'Minutos';
  labelSeconds: string = 'Segundos';
}
