import { TestBed } from '@angular/core/testing';

import { ArchivoPDFService } from './archivo-pdf.service';

describe('ArchivoPDFService', () => {
  let service: ArchivoPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivoPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
