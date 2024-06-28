import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainContainerComponent } from './app-main-container.component';

describe('AppMainContainerComponent', () => {
  let component: AppMainContainerComponent;
  let fixture: ComponentFixture<AppMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMainContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
