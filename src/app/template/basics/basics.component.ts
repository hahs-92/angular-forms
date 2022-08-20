import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  save(myForm: NgForm) {
    console.log(myForm.value);
  }
}

// section 16: 236 => ViewChild
