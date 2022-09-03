import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  patternName = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  striderNotAllow(control: FormControl) {
    const value = control?.value;

    if (value === 'strider') {
      return { noStrider: true }; // con que devolvamos un obj estamos diciendo que es un error
    }

    return null;
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.patternName)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern),
      ],
    ],
    username: ['', [Validators.required, this.striderNotAllow]],
  });

  constructor(private fb: FormBuilder) {}

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
