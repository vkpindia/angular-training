import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDindingComponent } from './dinding.component';

describe('DindingComponent', () => {
  let component: DataDindingComponent;
  let fixture: ComponentFixture<DataDindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
