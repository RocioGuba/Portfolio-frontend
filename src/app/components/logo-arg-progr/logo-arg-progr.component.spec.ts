import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgProgrComponent } from './logo-arg-progr.component';

describe('LogoArgProgrComponent', () => {
  let component: LogoArgProgrComponent;
  let fixture: ComponentFixture<LogoArgProgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgProgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoArgProgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
