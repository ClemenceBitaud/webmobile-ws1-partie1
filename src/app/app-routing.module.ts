import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DeviceDashboardComponent} from "./components/device-dashboard/device-dashboard.component";
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'device-dashboard/:id', component: DeviceDashboardComponent},
  { path: 'user-dashboard/:id', component: UserDashboardComponent},
  { path: 'admin-dashboard/:id', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
