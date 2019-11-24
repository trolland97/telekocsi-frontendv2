import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/api/users";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ Authorization: 'Basic ' + 
            btoa(sessionStorage.getItem('_username') + ":" + sessionStorage.getItem('_password')) });
  }

  updateUser(email: string, firstname: string, lastname: string) {
    let id = +sessionStorage.getItem("id");
    this.http.put(this.url + "/credentials/" + id, {email: email, firstname: firstname, lastname: lastname}, {headers: this.headers}).subscribe(() => {
      this.updateSession();
      window.location.reload();
    });
  }

  updateUserPassowrd(password: string) {
    let id = +sessionStorage.getItem("id");
    this.http.put(this.url + "/password/" + id, password, {headers: this.headers}).subscribe(() => {
      this.updateSession();
      window.location.reload();
    });
  }

  updateSession() {
    let id = +sessionStorage.getItem("id");
    this.http.get(this.url + "/" + id, {headers: this.headers}).subscribe((user: IUser) => {
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("password", user.password);
      sessionStorage.setItem("firstname", user.firstname);
      sessionStorage.setItem("lastname", user.lastname);
    })
  }
}
