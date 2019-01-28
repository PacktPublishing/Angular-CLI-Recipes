import { AfterViewInit, Component } from '@angular/core';
import { Show } from 'src/app/show';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/search.service';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements AfterViewInit {

  public result: Observable<Show>;
  public ready$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private search: SearchService,
    private favorites: FavoritesService,
  ) { }

  ngAfterViewInit() {
    this.result = this.route.queryParams.pipe(
      // delay(1000),
      switchMap(params => {
        console.log(params);
        return this.search.search(params.q);
      }),
      tap(() => this.ready$.next(true)),
    );
  }

  public add(show: Show) {
    this.favorites.add(show);
    this.router.navigate(['']);
  }

}
