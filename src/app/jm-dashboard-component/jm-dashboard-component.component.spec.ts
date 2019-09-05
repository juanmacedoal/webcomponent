import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmDashboardComponentComponent } from './jm-dashboard-component.component';

describe('JmDashboardComponentComponent', () => {
  let component: JmDashboardComponentComponent;
  let fixture: ComponentFixture<JmDashboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmDashboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
