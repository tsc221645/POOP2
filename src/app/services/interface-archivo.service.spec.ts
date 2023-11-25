import { TestBed } from '@angular/core/testing';

import { InterfaceArchivoService } from './interface-archivo.service';

describe('InterfaceArchivoService', () => {
  let service: InterfaceArchivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceArchivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
