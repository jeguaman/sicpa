import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnterpriseComponent } from './view-enterprise.component';

describe('ViewEnterpriseComponent', () => {
  let component: ViewEnterpriseComponent;
  let fixture: ComponentFixture<ViewEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
