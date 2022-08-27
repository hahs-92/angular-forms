import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent {
  person = {
    genre: 'M',
    notifications: true,
  };

  terms = false;
}
