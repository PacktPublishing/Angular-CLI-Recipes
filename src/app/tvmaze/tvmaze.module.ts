import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeComponent } from '../tvmaze.component';

@NgModule({
  declarations: [TvmazeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TvmazeComponent,
  ]
})
export class TvmazeModule { }
