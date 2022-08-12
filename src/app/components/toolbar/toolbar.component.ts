import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
      },
      {
        label: 'Input & Output',
        icon: 'pi pi-fw pi-arrows-h',
        routerLink: 'inputOutput',
      },
      {
        label: 'Two-way-binding',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'twowaybinding',
      },
      {
        label: 'Pipes',
        icon: 'pi pi-fw pi-forward',
        routerLink: 'pipes'
      },
      {
        label: 'Directives',
        icon: 'pi pi-fw pi-hashtag',
        routerLink: 'directives'
      },
      {
        label: 'Interceptors',
        icon: 'pi pi-fw pi-user',
      },
    ];
  }
}
