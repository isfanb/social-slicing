import { TestBed } from '@angular/core/testing';

import { UtubeService } from './utube.service';

describe('UtubeService', () => {
  let service: UtubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
