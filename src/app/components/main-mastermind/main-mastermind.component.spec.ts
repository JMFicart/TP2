import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMastermindComponent } from './main-mastermind.component';

describe('MainMastermindComponent', () => {
  let component: MainMastermindComponent;
  let fixture: ComponentFixture<MainMastermindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMastermindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMastermindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
