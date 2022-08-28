import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  myForm: FormGroup = this.fb.group({
    name: ['valor inicial'],
    price: [0],
    stock: [0],
  });

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4086'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  constructor(public fb: FormBuilder) {}
}
