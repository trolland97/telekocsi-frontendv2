import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  email: string;
  firstname: string;
  lastname: string;

  constructor(private userService: UserService) {
    this.email = sessionStorage.getItem("email");
    this.firstname = sessionStorage.getItem("firstname");
    this.lastname = sessionStorage.getItem("lastname");
    console.log(this.email + " " + this.firstname + " " + this.lastname)
  }

  ngOnInit() { }

  updateUser(email, lastname, firstname) {
    this.userService.updateUser(email, firstname, lastname);
  }

  updateUserPassword(password) {
    this.userService.updateUserPassowrd(password);
  } 
}
