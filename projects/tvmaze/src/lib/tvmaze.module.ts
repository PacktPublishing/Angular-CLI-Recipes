import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [TvmazeComponent],
  imports: [
  ],
  exports: [TvmazeComponent],
  providers: [SearchService]
})
export class TvmazeModule { }
