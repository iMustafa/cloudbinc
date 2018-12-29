import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scene7Component } from './scene7.component';

describe('Scene7Component', () => {
  let component: Scene7Component;
  let fixture: ComponentFixture<Scene7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scene7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scene7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
