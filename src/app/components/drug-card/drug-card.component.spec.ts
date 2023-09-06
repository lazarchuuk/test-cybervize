import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCardComponent } from './drug-card.component';

describe('DrugCardComponent', () => {
  let component: DrugCardComponent;
  let fixture: ComponentFixture<DrugCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugCardComponent]
    });
    fixture = TestBed.createComponent(DrugCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
