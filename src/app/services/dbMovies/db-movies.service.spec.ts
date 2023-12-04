import { TestBed } from '@angular/core/testing';

import { DbMoviesService } from './db-movies.service';

describe('DbMoviesService', () => {
  let service: DbMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
