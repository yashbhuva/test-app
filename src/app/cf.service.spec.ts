import { TestBed } from '@angular/core/testing';

import { CfService } from './cf.service';

describe('CfService', () => {
  let service: CfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
