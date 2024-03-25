import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupensListComponent } from './coupens-list.component';

describe('CoupensListComponent', () => {
  let component: CoupensListComponent;
  let fixture: ComponentFixture<CoupensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupensListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
