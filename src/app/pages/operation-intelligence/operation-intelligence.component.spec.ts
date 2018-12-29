import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationIntelligenceComponent } from './operation-intelligence.component';

describe('OperationIntelligenceComponent', () => {
  let component: OperationIntelligenceComponent;
  let fixture: ComponentFixture<OperationIntelligenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationIntelligenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
