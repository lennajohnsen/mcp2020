import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPlateComponent } from './paper-plate.component';

describe('PaperPlateComponent', () => {
  let component: PaperPlateComponent;
  let fixture: ComponentFixture<PaperPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
