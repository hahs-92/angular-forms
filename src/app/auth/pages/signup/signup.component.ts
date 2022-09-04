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

  constructor(
    private fb: FormBuilder,
    private validationService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
