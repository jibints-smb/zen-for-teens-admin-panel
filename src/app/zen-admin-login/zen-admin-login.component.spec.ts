import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenAdminLoginComponent } from './zen-admin-login.component';

describe('ZenAdminLoginComponent', () => {
  let component: ZenAdminLoginComponent;
  let fixture: ComponentFixture<ZenAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenAdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
