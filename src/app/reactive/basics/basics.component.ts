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
export class BasicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: [
      ,
      //valor inicial
      [Validators.required, Validators.minLength(3)], // validadores sincronos
    ],
    price: [, [Validators.required, Validators.min(1)]],
    stock: [, [Validators.required, Validators.min(1)]],
  });

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4086'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //establecer valores al formualrio
    //debemos enviar setear los valores de todos los valores
    //podemo sutilizar patchValue para no tener que setear todos los values
    this.myForm.setValue({
      name: '',
      price: 0,
      stock: 0,
    });
  }

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); //mostar los errores de validaiones
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
