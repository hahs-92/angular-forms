import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    //si el correo ya existe retornamos el objeto indicando el error
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`).pipe(
      delay(3000),
      map((resp) => {
        return resp.length === 0 ? null : { emailNotAvaliable: true };
      })
    );
  }
}
