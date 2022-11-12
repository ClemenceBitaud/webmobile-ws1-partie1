import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../model/device";
import {User} from "../../model/user";

@Component({
  selector: 'app-add-edit-users-dialog',
  templateUrl: './add-edit-users-dialog.component.html',
  styleUrls: ['./add-edit-users-dialog.component.scss']
})
export class AddEditUsersDialogComponent implements OnInit {

  public user: User = {
    id: Math.floor(Math.random() * 10000000),
    name: '',
    firstname: '', identifier: '', password: '', role: 'user', access: 'read only'
  };

  constructor(public dialogRef: MatDialogRef<AddEditUsersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
    if (data !== null){
      this.user = data;
    }
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
