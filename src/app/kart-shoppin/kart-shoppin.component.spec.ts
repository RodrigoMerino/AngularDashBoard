import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartShoppinComponent } from './kart-shoppin.component';

describe('KartShoppinComponent', () => {
  let component: KartShoppinComponent;
  let fixture: ComponentFixture<KartShoppinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartShoppinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartShoppinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
