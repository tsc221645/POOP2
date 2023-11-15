import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAdminComponent } from './default-admin.component';

describe('DefaultAdminComponent', () => {
  let component: DefaultAdminComponent;
  let fixture: ComponentFixture<DefaultAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultAdminComponent]
    });
    fixture = TestBed.createComponent(DefaultAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
