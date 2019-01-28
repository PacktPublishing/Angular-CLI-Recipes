import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit {


  @ViewChild('query') query: ElementRef<HTMLInputElement>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public search() {
    const queryValue: string = this.query.nativeElement.value;
    this.router.navigate(['search'], {queryParams: {q: queryValue}});
  }

}
