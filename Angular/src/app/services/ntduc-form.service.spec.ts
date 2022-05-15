import { TestBed } from '@angular/core/testing';

import { NtducFormService } from './ntduc-form.service';

describe('NtducFormService', () => {
  let service: NtducFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtducFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
