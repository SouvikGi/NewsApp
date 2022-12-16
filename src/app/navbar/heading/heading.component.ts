import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsServiceService } from '../../service/news-service.service'
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  title!:string;

  @Input()
  drawers!: MatSidenav;

  showLoader = true;

  constructor(private _router: Router, public titleServ:NewsServiceService) {

    this._router.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.showLoader = true;
      }
      if (routeEvent instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });
  }

  ngOnInit(): void {
    this.titleServ.getTitle().subscribe(appTitle => this.title = appTitle);
  }

}
