import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubtractComponent } from './menu-subtract.component';

describe('MenuSubtractComponent', () => {
  let component: MenuSubtractComponent;
  let fixture: ComponentFixture<MenuSubtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSubtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
