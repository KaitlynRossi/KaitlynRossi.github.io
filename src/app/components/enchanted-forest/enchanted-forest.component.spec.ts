import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantedForestComponent } from './enchanted-forest.component';

describe('EnchantedForestComponent', () => {
  let component: EnchantedForestComponent;
  let fixture: ComponentFixture<EnchantedForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnchantedForestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantedForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
