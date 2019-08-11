import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmobComponent } from './addmob.component';

describe('AddmobComponent', () => {
  let component: AddmobComponent;
  let fixture: ComponentFixture<AddmobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
