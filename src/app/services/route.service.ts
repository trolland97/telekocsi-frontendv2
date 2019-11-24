import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRoute } from '../models/route.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private url = "http://localhost:8080/api/routes";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ Authorization: 'Basic ' + 
            btoa(sessionStorage.getItem('_username') + ":" + sessionStorage.getItem('_password')) });
  }

  listRoutes(): Observable<IRoute[]> {
    return this.http.get<IRoute[]>(this.url, { headers: this.headers });
  }

  listMyRoutes(): Observable<IRoute[]> {
    let id = sessionStorage.getItem("id");
    return this.http.get<IRoute[]>(this.url + "/driver/" + id, { headers: this.headers });
  }

  listSignedRoutes(): Observable<IRoute[]> {
    let id = sessionStorage.getItem("id");
    return this.http.get<IRoute[]>(this.url + "/passenger/" + id, { headers: this.headers });
  }

  createRoute(driverId: string, from: string, where: string, when: Date, maxPassengers: number, price: number) {
    this.http.post(this.url + "/" + driverId, { from: from, where: where, when: when, maxPassengers: maxPassengers, price: price }, { headers: this.headers }).subscribe(result => {
      window.location.reload();
    });
  }

  updateRoute(id: number, route: IRoute) {
    this.http.put(this.url + "/" + id, { route }).subscribe();
  }

  signToRoute(routeId: number, passengerId: number) {
    this.http.put(this.url + "/" + routeId + "/passenger/" + passengerId, {}, {headers: this.headers}).subscribe(result => {
      window.location.reload();
    });
  }

  signOffRoute(routeId: number, passengerId: number) {
    this.http.delete(this.url + "/" + routeId + "/passenger/" + passengerId, {headers: this.headers}).subscribe(result => {
      window.location.reload();
    });
  }

  deleteRoute(id: number) {
    this.http.delete(this.url + "/" + id, { headers: this.headers }).subscribe(result => {
      window.location.reload();
    });
  }
}
