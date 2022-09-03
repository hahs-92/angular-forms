import { FormControl } from '@angular/forms';

export const patternName = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const striderNotAllow = (control: FormControl) => {
  const value = control?.value;

  if (value === 'strider') {
    return { noStrider: true }; // con que devolvamos un obj estamos diciendo que es un error
  }

  return null;
};

//lo movimos al servicio
