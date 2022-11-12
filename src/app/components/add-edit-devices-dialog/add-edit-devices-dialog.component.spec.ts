import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDevicesDialogComponent } from './add-edit-devices-dialog.component';

describe('AddEditDevicesDialogComponent', () => {
  let component: AddEditDevicesDialogComponent;
  let fixture: ComponentFixture<AddEditDevicesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDevicesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDevicesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
