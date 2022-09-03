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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  myForm: FormGroup = this.fb.group({
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
    ],
    username: [
      '',
      [Validators.required, this.validationService.striderNotAllow],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private validationService: ValidatorService
  ) {}

  notValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
