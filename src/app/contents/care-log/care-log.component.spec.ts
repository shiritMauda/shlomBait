import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareLogComponent } from './care-log.component';

describe('CareLogComponent', () => {
  let component: CareLogComponent;
  let fixture: ComponentFixture<CareLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
