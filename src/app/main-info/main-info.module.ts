import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinfoComponent } from './pages/minfo-page.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { PrincipalComponent } from './components/principal/principal.component';



@NgModule({
  declarations: [
    MinfoComponent,
    CountdownTimerComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CountdownTimerComponent
  ],
  exports: [
    MinfoComponent
  ]
})
export class MainInfoModule { }
