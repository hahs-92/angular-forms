import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//validations
// import { patternName } from '../../../shared/validator/validations';
// import { emailPattern } from '../../../shared/validator/validations';
// import { striderNotAllow } from '../../../shared/validator/validations';
//service
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //utilizamos un db fake para simular las validaciones asincronas
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validationService.patternName),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.validationService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validationService.striderNotAllow],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      //options sincronas y asincronas
      validators: [this.validationService.sameFields('password', 'password2')],
    }
  );

  //emailErrorMessage = '';

  //los getters se ejecutan cada vez que hay un cambio en el componente
  get emailErrorMessage() {
    const errors = this.myForm.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email is obligatorio';
    }

    if (errors?.['pattern']) {
      return 'Email con formato invalido';
    }

    if (errors?.['emailNotAvaliable']) {
      return 'Email no disponible';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validationService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  // emailRequired() {
  //   //this.myForm.get('email')?.hasError('required');
  //   // tambien se podria acceder al required asi
  //   return (
  //     this.myForm.get('email')?.errors?.['required'] &&
  //     this.myForm.get('email')?.touched
  //   );
  // }

  // checkPatterEmail() {
  //   return (
  //     this.myForm.get('email')?.errors?.['pattern'] &&
  //     this.myForm.get('email')?.touched
  //   );
  // }

  // emailNotAvaliable() {
  //   return (
  //     this.myForm.get('email')?.errors?.['emailNotAvaliable'] &&
  //     this.myForm.get('email')?.touched
  //   );
  // }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
