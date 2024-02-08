import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHideToolbarComponent } from './auto-hide-toolbar.component';

describe('AutoHideToolbarComponent', () => {
  let component: AutoHideToolbarComponent;
  let fixture: ComponentFixture<AutoHideToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoHideToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoHideToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
