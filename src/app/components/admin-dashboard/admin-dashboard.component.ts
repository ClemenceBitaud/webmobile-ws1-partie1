import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {User} from "../../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import users from '../../../assets/user.json';
import {AddEditUsersDialogComponent} from "../add-edit-users-dialog/add-edit-users-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AddEditDevicesDialogComponent} from "../add-edit-devices-dialog/add-edit-devices-dialog.component";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  users! : User[];
  displayedColumns: string[] = ['name', 'firstname', 'identifier', 'password', 'access' ,'actions'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.users = users.users.filter(u => u.role === 'admin') as User[];
  }

  ngOnInit(): void {
  }

  openAddAdmin(){
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
      console.log(this.users);
      this.table.renderRows();
    })
  }

  deleteAdmin(rowId: number){
    this.users.splice(rowId, 1);
    this.table.renderRows();
  }

  backToDeviceDashboard(){
    this.router.navigate(['device-dashboard', this.route.snapshot.paramMap.get('id')]);
  }

}
