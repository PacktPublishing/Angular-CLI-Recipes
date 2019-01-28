import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvmazeModule } from './tvmaze/tvmaze.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from 'src/app/storage.service';
import { FavoritesService } from 'src/app/favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HomeComponent,
    ShowCardComponent,
    SearchBoxComponent,
    ShowsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TvmazeModule
  ],
  providers: [StorageService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
