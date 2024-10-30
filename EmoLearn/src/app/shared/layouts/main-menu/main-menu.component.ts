import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[] = [];
  userData: any = {};

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }


  initialize(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fa-solid fa-gauge',
        routerLink: 'dashboard',
      },
      {
        label: 'Session Overview',
        icon: 'fa-solid fa-chart-simple',
        routerLink: 'session-overview',
      },
      {
        label: 'Progress Overview',
        icon: 'fa-solid fa-chart-line',
        routerLink: 'progress-overview',
      },
      {
        label: 'Courses',
        icon: 'fa-solid fa-lines-leaning',
        routerLink: 'courses',
      },
      {
        label: 'Activities',
        icon: 'fa-solid fa-dumbbell',
        routerLink: 'activites',
      },
      {
        label: 'Reports',
        icon: 'fa-solid fa-file-contract',
        routerLink: 'reports',
      },
      {
        label: 'Settings',
        icon: 'fa-solid fa-sliders',
        routerLink: 'settings',
      },
      {
        label: 'Sign out',
        icon: 'fa-solid fa-right-from-bracket',
        routerLink: 'dashboard',
      },
    ];
  }

}
