import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): unknown {

    let output: string;

    if (value.toLowerCase() === 'male') {
      output = 'M';
    } else if (value.toLowerCase() === 'female'){
      output = 'F';
    }

    return output;
  }

}
