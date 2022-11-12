import {Component, OnInit, ViewChild} from '@angular/core';
import devices from '../../../assets/devices.json';
import users from '../../../assets/user.json';
import {Device} from "../../model/device";
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddEditDevicesDialogComponent} from "../add-edit-devices-dialog/add-edit-devices-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-device-dashboard',
  templateUrl: './device-dashboard.component.html',
  styleUrls: ['./device-dashboard.component.scss']
})
export class DeviceDashboardComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  devices! : Device[];
  displayedColumns: string[] = ['name', 'actions'];
  user!: User;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute) {
    this.devices = devices.devices;
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null){
      const user = users.users.find(u => u.id.toString() === userId);
      if (user !== undefined){
        this.user = user as User;
      }
    }
  }

  ngOnInit(): void {
  }

  deleteDevice(rowId: number){
    this.devices.splice(rowId, 1);
    this.table.renderRows();
  }

  openEdit(device: Device){

    const dialogRef = this.dialog.open(AddEditDevicesDialogComponent, {data: device});

    dialogRef.afterClosed().subscribe(result => {
      device.name = result;
      console.log(device);
      this.table.renderRows();
    })
  }

  openAddDevice(){
    const dialogRef = this.dialog.open(AddEditDevicesDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        const device: Device = {id: Math.floor(Math.random() * 10000000), name: result};
        this.devices.push(device);
        this.table.renderRows();
      }
    })
  }

  manageUser(){}

  manageAdmin(){}

}
