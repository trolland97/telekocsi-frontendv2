import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.scss']
})
export class NewRouteComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  ngOnInit() {
  }

  newRoute(from, where, when: Date, maxPassengers, price) {
    this.routeService.createRoute(sessionStorage.getItem("id"), from, where, when, maxPassengers, +price);
  }

}
