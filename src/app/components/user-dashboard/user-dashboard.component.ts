import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {User} from "../../model/user";
import users from '../../../assets/user.json';
import {ActivatedRoute, Router} from "@angular/router";
import {AddEditDevicesDialogComponent} from "../add-edit-devices-dialog/add-edit-devices-dialog.component";
import {Device} from "../../model/device";
import {MatDialog} from "@angular/material/dialog";
import {AddEditUsersDialogComponent} from "../add-edit-users-dialog/add-edit-users-dialog.component";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  users! : User[];
  displayedColumns: string[] = ['name', 'firstname', 'identifier', 'password', 'access' ,'actions'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.users = users.users.filter(u => u.role === 'user') as User[];
  }

  ngOnInit(): void {
  }

  openAddUser(){
    const dialogRef = this.dialog.open(AddEditUsersDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        this.users.push(result);
        this.table.renderRows();
      }
    })
  }

  openEdit(user: User){
    const dialogRef = this.dialog.open(AddEditUsersDialogComponent, {data: user});

    dialogRef.afterClosed().subscribe(result => {
      user = result;
      this.table.renderRows();
    })
  }

  deleteUser(rowId: number){
    this.users.splice(rowId, 1);
    this.table.renderRows();
  }

  backToDeviceDashboard(){
    this.router.navigate(['device-dashboard', this.route.snapshot.paramMap.get('id')]);
  }

}
