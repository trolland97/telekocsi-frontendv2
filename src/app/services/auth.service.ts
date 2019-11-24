import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/auth"
  updateUrl: string = "http://localhost:8080/api/users"

  constructor(private http: HttpClient) { }
  
  login(email: string, password:string){
    this.http.post(this.url, {email: email, password: password}, {observe: 'response'}).subscribe(response => {
      if(response.status == 200) {
        let user = <IUser> response.body;
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("password", user.password);
        sessionStorage.setItem("firstname", user.firstname);
        sessionStorage.setItem("lastname", user.lastname);
        sessionStorage.setItem("id", user.id.toString());
        sessionStorage.setItem("_username", "admin");
        sessionStorage.setItem("_password", "admin");
        window.location.reload();
      }
    });
  }

  isLoggedIn() {
    return sessionStorage.getItem("_username") != null && sessionStorage.getItem("_password") != null;
  }

  register(email: string, password: string, firstname: string, lastname: string) {
    this.http.post(this.url + "/register", {email: email, password: password, firstname: firstname, lastname: lastname}).subscribe();
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

}
