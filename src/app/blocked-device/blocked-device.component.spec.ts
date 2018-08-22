import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedDeviceComponent } from './blocked-device.component';

describe('BlockedDeviceComponent', () => {
  let component: BlockedDeviceComponent;
  let fixture: ComponentFixture<BlockedDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
