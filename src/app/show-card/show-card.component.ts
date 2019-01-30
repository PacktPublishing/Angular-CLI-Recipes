import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'tvmaze';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.sass']
})
export class ShowCardComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
