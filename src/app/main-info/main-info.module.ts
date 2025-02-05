import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinfoComponent } from './pages/minfo-page.component';



@NgModule({
  declarations: [
    MinfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinfoComponent
  ]
})
export class MainInfoModule { }
