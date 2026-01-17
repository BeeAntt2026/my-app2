import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalog } from './product-catalog';

describe('ProductCatalog', () => {
  let component: ProductCatalog;
  let fixture: ComponentFixture<ProductCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
