import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhVerifyComponent } from './ph-verify.component';

describe('PhVerifyComponent', () => {
  let component: PhVerifyComponent;
  let fixture: ComponentFixture<PhVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
