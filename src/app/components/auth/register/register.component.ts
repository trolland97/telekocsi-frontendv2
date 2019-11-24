import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() login = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showLogin() {
    this.login.emit(true);
  }

  register(firstname, lastname, email, password, password_again) {
    if(password == password_again){
      this.authService.register(email, password, firstname, lastname)
    }else {
      alert("Sikertelen regisztráció");
    }
  }

  


}
