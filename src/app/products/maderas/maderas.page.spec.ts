import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaderasPage } from './maderas.page';

describe('MaderasPage', () => {
  let component: MaderasPage;
  let fixture: ComponentFixture<MaderasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaderasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
