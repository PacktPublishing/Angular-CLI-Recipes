import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeComponent } from '../tvmaze.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [TvmazeComponent],
  imports: [
    CommonModule
  ],
  providers: [
    SearchService,
  ],
  exports: [
    TvmazeComponent,
  ]
})
export class TvmazeModule { }
