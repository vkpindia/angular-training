import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any[], min: number, max: any): unknown {

    let output: any[] = [];

    if (Array.isArray(value) === false) {
      try {
        throw 'Range pipe will work only on array type data';
      } catch (err) {
        console.error(err);
      }
    }

    if (min === undefined || max === undefined) {
      return value;
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < value.length; i++) {
      if (value[i].salary >= min && value[i].salary <= max) {
        output.push(value[i]);
      }
    }
    return output;
  }

}

