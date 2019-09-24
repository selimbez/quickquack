import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuackComponent } from './quack.component';

describe('QuackComponent', () => {
  let component: QuackComponent;
  let fixture: ComponentFixture<QuackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
