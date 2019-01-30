import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public search(query: string): Observable<Show> {
    return this.http.get<Show>(`//api.tvmaze.com/singlesearch/shows?q=${query}`);
  }

}
