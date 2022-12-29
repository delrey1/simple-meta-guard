import { TestBed } from '@angular/core/testing';

import { SimpleMetaGuard } from './simple-meta.guard';

describe('SimpleMetaGuard', () => {
  let guard: SimpleMetaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SimpleMetaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
