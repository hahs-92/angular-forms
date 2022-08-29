import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  myForm = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    genre: 'F',
    notifications: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //no utilizamos setValue xq persona no tiene el campo
    // de terms
    this.myForm.reset({ ...this.person, terms: true });

    //this.myForm.get('terms')?.valueChanges.subscribe(console.log);

    this.myForm.valueChanges.subscribe(({ terms, ...rest }) => {
      //delete form.terms;

      this.person = {
        ...this.person,
        genre: rest.genre as string,
        notifications: rest.notifications as boolean,
      };
    });
  }

  save() {
    // tambien se puede hacer como esta en el ngOnit
    // const formValue = { ...this.myForm.value };
    // delete formValue.terms;
    // this.person = {
    //   ...this.person,
    //   genre: formValue.genre as string,
    //   notifications: formValue.notifications as boolean,
    // };

    console.log(this.myForm);
  }
}
