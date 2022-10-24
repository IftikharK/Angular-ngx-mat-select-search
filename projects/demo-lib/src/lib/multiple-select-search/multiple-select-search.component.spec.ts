import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectSearchComponent } from './multiple-select-search.component';

describe('MultipleSelectSearchComponent', () => {
  let component: MultipleSelectSearchComponent;
  let fixture: ComponentFixture<MultipleSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
