import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  @ViewChild('myForm') myForm!: NgForm;

  isValidName() {
    return this.myForm?.controls?.['product']?.invalid && this.myForm.touched;
  }

  // save(myForm: NgForm) {
  //   console.log(myForm.value);
  // }

  //view child
  save() {
    console.log(this.myForm.value);
  }
}
