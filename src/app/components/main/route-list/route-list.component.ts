import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRoute } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  routes$: Observable<IRoute[]>;
  myRoutes$: Observable<IRoute[]>;
  signedRoutes$: Observable<IRoute[]>;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routes$ = this.routeService.listRoutes();
    this.myRoutes$ = this.routeService.listMyRoutes();
    this.signedRoutes$ = this.routeService.listSignedRoutes();
  }

  deleteRoute(id: number) {
    this.routeService.deleteRoute(id);
  }

  signOffRoute(id: number) {
    this.routeService.signOffRoute(id, +sessionStorage.getItem("id"));
  }

  signToRoute(route: IRoute) {
    if(route.driver.id == +sessionStorage.getItem("id")) {
      window.alert("Te hirdetted meg ezt az utat pekmen");
    }
    else {
      this.routeService.signToRoute(route.id, +sessionStorage.getItem("id"));
    }
  }

}
