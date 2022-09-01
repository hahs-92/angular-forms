import { Component } from '@angular/core';

interface menuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent {
  menuTemplate: menuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics',
    },
    {
      text: 'Dinámicos',
      route: './template/dinamics',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];

  menuReactive: menuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics',
    },
    {
      text: 'Dinámicos',
      route: './reactive/dinamics',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];

  menuAuth: menuItem[] = [
    {
      text: 'Login',
      route: './auth/login',
    },
    {
      text: 'SignUp',
      route: './auth/signup',
    },
  ];
}
