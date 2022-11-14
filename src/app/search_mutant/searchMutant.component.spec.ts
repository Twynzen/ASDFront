import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMutantComponent } from './searchMutant.component';

describe('SearchMutantComponent', () => {
  let component: SearchMutantComponent;
  let fixture: ComponentFixture<SearchMutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMutantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
