import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeComponent } from '../tvmaze.component';
import { SearchService } from 'src/app/tvmaze/search.service';

@NgModule({
  declarations: [TvmazeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TvmazeComponent,
  ],
  providers: [
    SearchService,
  ]
})
export class TvmazeModule { }
