import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrSettingComponent } from './wsr-setting.component';

describe('WsrSettingComponent', () => {
  let component: WsrSettingComponent;
  let fixture: ComponentFixture<WsrSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
