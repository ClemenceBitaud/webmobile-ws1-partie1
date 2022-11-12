import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsersDialogComponent } from './add-edit-users-dialog.component';

describe('AddEditUsersDialogComponent', () => {
  let component: AddEditUsersDialogComponent;
  let fixture: ComponentFixture<AddEditUsersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUsersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
