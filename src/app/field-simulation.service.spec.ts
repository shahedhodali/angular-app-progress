import { TestBed } from '@angular/core/testing';

import { FieldSimulationService } from './field-simulation.service';

describe('FieldSimulationService', () => {
  let service: FieldSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
