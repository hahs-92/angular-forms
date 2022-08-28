import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  myForm: FormGroup = this.fb.group({
    name: [
      '', //valor inicial
      [Validators.required, Validators.minLength(3)], // validadores sincronos
    ],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4086'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  constructor(private fb: FormBuilder) {}
}
