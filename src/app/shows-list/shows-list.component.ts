import { Component, OnInit } from '@angular/core';
import { Show } from 'tvmaze';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.sass']
})
export class ShowsListComponent implements OnInit {

  public shows: Show[] = this.favorites.getList();

  constructor(private favorites: FavoritesService) { }

  remove(show: Show) {
    this.favorites.remove(show);
    this.shows = this.favorites.getList();
  }

  ngOnInit(): void {
  }

}
