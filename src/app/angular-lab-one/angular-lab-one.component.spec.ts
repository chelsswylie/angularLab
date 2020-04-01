import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLabOneComponent } from './angular-lab-one.component';

describe('AngularLabOneComponent', () => {
  let component: AngularLabOneComponent;
  let fixture: ComponentFixture<AngularLabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLabOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
