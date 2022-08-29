import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css'],
})
export class DinamicsComponent {
  myForm: FormGroup = this.fb.group({
    name: [
      '', //valor inicial
      [Validators.required, Validators.minLength(3)], // validadores sincronos
    ],
    favs: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['God of war', Validators.required],
      ],
      Validators.required
    ),
  });

  newGame: FormControl = this.fb.control('', Validators.required);

  get favsArr() {
    return this.myForm.get('favs') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  addFav() {
    if (this.newGame.invalid) {
      return;
    }

    //Crear un nuevo formControl y agregarlo a favs
    // tambien podria ser push(new FormControl(this.newGame.value))
    this.favsArr.push(this.fb.control(this.newGame.value, Validators.required));
    this.newGame.reset();
  }

  deleteFav(index: number) {
    this.favsArr.removeAt(index);
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); //mostar los errores de validaiones
      return;
    }

    this.myForm.reset();
  }
}

//=> 258 eliminar
