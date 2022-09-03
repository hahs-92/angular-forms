import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  patternName = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  striderNotAllow = (control: FormControl): ValidationErrors | null => {
    const value = control?.value;

    if (value === 'strider') {
      return { noStrider: true }; // con que devolvamos un obj estamos diciendo que es un error
    }

    return null;
  };
}
