import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRouterComponent } from './default-router.component';

describe('DefaultRouterComponent', () => {
  let component: DefaultRouterComponent;
  let fixture: ComponentFixture<DefaultRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultRouterComponent]
    });
    fixture = TestBed.createComponent(DefaultRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
