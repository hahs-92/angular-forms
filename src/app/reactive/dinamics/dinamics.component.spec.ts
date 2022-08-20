import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicsComponent } from './dinamics.component';

describe('DinamicsComponent', () => {
  let component: DinamicsComponent;
  let fixture: ComponentFixture<DinamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
