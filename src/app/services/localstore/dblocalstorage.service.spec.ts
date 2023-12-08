import { TestBed } from '@angular/core/testing';

import { DblocalstorageService } from './dblocalstorage.service';

describe('DblocalstorageService', () => {
  let service: DblocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DblocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
