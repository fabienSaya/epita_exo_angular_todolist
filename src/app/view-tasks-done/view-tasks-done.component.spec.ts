import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksDoneComponent } from './view-tasks-done.component';

describe('ViewTasksDoneComponent', () => {
  let component: ViewTasksDoneComponent;
  let fixture: ComponentFixture<ViewTasksDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTasksDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
