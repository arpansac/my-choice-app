import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChoiceComponent } from './my-choice.component';

describe('MyChoiceComponent', () => {
  let component: MyChoiceComponent;
  let fixture: ComponentFixture<MyChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
