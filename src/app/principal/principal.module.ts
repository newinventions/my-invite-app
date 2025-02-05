import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInfoModule } from '../main-info/main-info.module';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MainInfoModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class PrincipalModule { }
