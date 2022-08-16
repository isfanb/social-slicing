import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideActivityComponent } from './side-activity.component';

describe('SideActivityComponent', () => {
  let component: SideActivityComponent;
  let fixture: ComponentFixture<SideActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
