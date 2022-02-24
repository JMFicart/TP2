import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispResultComponent } from './disp-result.component';

describe('DispResultComponent', () => {
  let component: DispResultComponent;
  let fixture: ComponentFixture<DispResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
