import { TestBed } from '@angular/core/testing';

import { ArchivoWORDService } from './archivo-word.service';

describe('ArchivoWORDService', () => {
  let service: ArchivoWORDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoWORDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
