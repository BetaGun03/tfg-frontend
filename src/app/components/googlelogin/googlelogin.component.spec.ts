import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleloginComponent } from './googlelogin.component';

describe('GoogleloginComponent', () => {
  let component: GoogleloginComponent;
  let fixture: ComponentFixture<GoogleloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
