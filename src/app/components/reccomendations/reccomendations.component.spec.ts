import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccomendationsComponent } from './reccomendations.component';

describe('ReccomendationsComponent', () => {
  let component: ReccomendationsComponent;
  let fixture: ComponentFixture<ReccomendationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReccomendationsComponent]
    });
    fixture = TestBed.createComponent(ReccomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
