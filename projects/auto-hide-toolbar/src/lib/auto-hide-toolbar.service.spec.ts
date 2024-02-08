import { TestBed } from '@angular/core/testing';

import { AutoHideToolbarService } from './auto-hide-toolbar.service';

describe('AutoHideToolbarService', () => {
  let service: AutoHideToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoHideToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
