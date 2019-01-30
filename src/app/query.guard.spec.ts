import { TestBed, async, inject } from '@angular/core/testing';

import { QueryGuard } from './query.guard';

describe('QueryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryGuard]
    });
  });

  it('should ...', inject([QueryGuard], (guard: QueryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
