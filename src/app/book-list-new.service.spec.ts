import { TestBed } from '@angular/core/testing';

import { BookListNewService } from './book-list-new.service';

describe('BookListNewService', () => {
  let service: BookListNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
