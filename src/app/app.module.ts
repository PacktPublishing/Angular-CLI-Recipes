import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvmazeModule } from './tvmaze/tvmaze.module';
import { SearchService } from 'src/app/search.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TvmazeModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
