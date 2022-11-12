import {Component, Inject, OnInit} from '@angular/core';
import {Device} from "../../model/device";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-devices-dialog',
  templateUrl: './add-edit-devices-dialog.component.html',
  styleUrls: ['./add-edit-devices-dialog.component.scss']
})
export class AddEditDevicesDialogComponent implements OnInit {

  public deviceName = '';

  constructor(public dialogRef: MatDialogRef<AddEditDevicesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Device) {
    if (data !== null){
      this.deviceName = data.name;
    }
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
