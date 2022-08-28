import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('RTX 4086'),
  });

  constructor() {}
}
