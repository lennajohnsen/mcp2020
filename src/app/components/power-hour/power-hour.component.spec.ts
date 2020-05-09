import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerHourComponent } from './power-hour.component';

describe('PowerHourComponent', () => {
  let component: PowerHourComponent;
  let fixture: ComponentFixture<PowerHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
