import { Injectable } from '@angular/core';
import { Show } from 'src/app/show';
import { StorageService } from 'src/app/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private key = 'shows';
  private list: Show[] = this.storage.get(this.key) || [];

  constructor(private storage: StorageService) { }

  add(show: Show) {
    this.list.push(show);
    this.saveState();
  }

  getList() {
    return [...this.list];
  }

  remove(show: Show) {
    this.list = this.list.filter((a, b) => a.id !== show.id);
    this.saveState();
  }

  private saveState() {
    this.storage.save(this.key, this.list);
  }
}
