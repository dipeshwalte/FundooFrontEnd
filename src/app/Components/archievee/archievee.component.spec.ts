import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveeComponent } from './archievee.component';

describe('ArchieveeComponent', () => {
  let component: ArchieveeComponent;
  let fixture: ComponentFixture<ArchieveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchieveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchieveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
