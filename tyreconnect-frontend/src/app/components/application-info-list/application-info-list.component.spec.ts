import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInfoListComponent } from './application-info-list.component';

describe('ApplicationInfoListComponent', () => {
  let component: ApplicationInfoListComponent;
  let fixture: ComponentFixture<ApplicationInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
