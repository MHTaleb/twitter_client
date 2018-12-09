import { TestBed } from '@angular/core/testing';

import { ReactiveTwitterSpringService } from './reactive-twitter-spring.service';

describe('ReactiveTwitterSpringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactiveTwitterSpringService = TestBed.get(ReactiveTwitterSpringService);
    expect(service).toBeTruthy();
  });
});
