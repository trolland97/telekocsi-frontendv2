import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() register = new EventEmitter<boolean>();

 

  constructor(private authService: AuthService) { }

  showRegister() {
    this.register.emit(true);
  }

  ngOnInit() {
  }

  login(email, password) {
    this.authService.login(email, password);   
  }
}
  
  
 

