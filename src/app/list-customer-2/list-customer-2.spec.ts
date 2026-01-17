import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomer2 } from './list-customer-2';

describe('ListCustomer2', () => {
  let component: ListCustomer2;
  let fixture: ComponentFixture<ListCustomer2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCustomer2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustomer2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
