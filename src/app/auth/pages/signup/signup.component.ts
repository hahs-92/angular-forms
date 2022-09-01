import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  patternName = '([a-zA-Z]+) ([a-zA-Z]+)';

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.patternName)]],
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
