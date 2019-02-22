import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchBoxComponent } from 'src/app/search-box/search-box.component';
import { ShowsListComponent } from 'src/app/shows-list/shows-list.component';
import { ShowCardComponent } from 'src/app/show-card/show-card.component';
import { RatingPipe } from 'src/app/rating.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomeComponent ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
