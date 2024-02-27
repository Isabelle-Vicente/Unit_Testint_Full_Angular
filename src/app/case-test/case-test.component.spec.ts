import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTestComponent } from './case-test.component';

describe('CaseTestComponent', () => {
  let component: CaseTestComponent;
  let fixture: ComponentFixture<CaseTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseTestComponent]
    });
    fixture = TestBed.createComponent(CaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ToBe Case Test', () => {
    var a = 'Hello'
    expect(a).toBe('Hello');
  });
});
