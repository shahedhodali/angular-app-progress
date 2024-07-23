import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSimulationComponent } from './field-simulation.component';

describe('FieldSimulationComponent', () => {
  let component: FieldSimulationComponent;
  let fixture: ComponentFixture<FieldSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
