import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = 'app';
  constructor(router: Router, route: ActivatedRoute) {
    router.events.pipe(filter(e => e instanceof NavigationEnd)).forEach(e => {
      if (route.root.firstChild.firstChild.firstChild) {
        this.title = route.root.firstChild.firstChild.firstChild.snapshot.data.title;
      } else if (route.root.firstChild.firstChild) {
        this.title = route.root.firstChild.firstChild.snapshot.data.title;
      } else {
        this.title = route.root.firstChild.snapshot.data.title;
      }
    });
  }

  ngOnInit() {
  }
}
