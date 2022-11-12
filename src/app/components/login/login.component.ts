import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import users from '../../../assets/user.json';
import {Role, User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  identifier='';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    for (const user of users.users){
      if (user.identifier === this.identifier){
        if (user.password === this.password){
          this.router.navigate(['device-dashboard', user.id]);
        }else{
          console.log("Mot de passe invalide");
        }
      }else{
        console.log("Identiant invalide");
      }
    }
  }

}
