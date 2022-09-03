import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  patternName = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  striderNotAllow(control: FormControl): ValidationErrors | null {
    const value = control?.value;

    if (value === 'strider') {
      return { noStrider: true }; // con que devolvamos un obj estamos diciendo que es un error
    }

    return null;
  }

  sameFields(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const value1 = formGroup.get(field1)?.value;
      const value2 = formGroup.get(field2)?.value;

      if (value1 !== value2) {
        formGroup.get(field2)?.setErrors({ noSame: true });
        return { noSame: true }; //con el objeto le indicamos un error
      }

      formGroup.get(field2)?.setErrors(null); //quita los errores de ese campo
      return null;
    };
  }
}
