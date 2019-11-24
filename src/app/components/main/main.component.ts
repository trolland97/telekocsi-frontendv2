import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  routes = true;
  advertising = false;
  profilesettings = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showRoutes() {
    this.routes = true;
    this.advertising = false;
    this.profilesettings = false;
  }

  showAdvertising() {
    this.advertising = true;
    this.routes = false;
    this.profilesettings = false;
  }

  showProfileSettings() {
    this.advertising = false;
    this.routes = false;
    this.profilesettings = true;
  }

  logout(){
    this.authService.logout();
  }

}
