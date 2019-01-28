import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvmaze',
  template: `<div>Powered by <a href="https://api.tvmaze.com" target="_blank">TVMAZE</a></div>`,
  styles: ['div { margin-top: 1em; }'],
})
export class TvmazeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
