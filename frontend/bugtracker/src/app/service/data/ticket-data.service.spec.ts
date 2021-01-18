import { TestBed } from '@angular/core/testing';

import { TicketDataService } from './ticket-data.service';

describe('TicketDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketDataService = TestBed.get(TicketDataService);
    expect(service).toBeTruthy();
  });
});
