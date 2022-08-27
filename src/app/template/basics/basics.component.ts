import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  @ViewChild('myForm') myForm!: NgForm; //obtenemos la ref del html

  isValidName() {
    return (
      this.myForm?.controls?.['product']?.invalid &&
      this.myForm?.controls?.['product']?.touched
    );
  }

  isValidPrice() {
    const isTouch = this.myForm?.controls?.['price']?.touched;
    const isValid = this.myForm?.controls?.['price']?.invalid;

    // con min del html podemos reemplazar esta linea
    // por la de isValid
    //const isGreaterThanZero = this.myForm?.controls?.['price']?.value < 0;

    return isTouch && isValid;
  }

  // save(myForm: NgForm) {
  //   console.log(myForm.value);
  // }

  //view child
  save() {}
}
