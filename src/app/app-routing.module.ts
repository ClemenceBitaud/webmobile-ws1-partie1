import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DeviceDashboardComponent} from "./components/device-dashboard/device-dashboard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'device-dashboard/:id', component: DeviceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
