import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}


/* 1-> Outstanding
2-> Excellent
3-> Good
4-> Average
5-> Poor

[
  {name: 'Raja', percent: '78%', grade: 3}
  {name: 'Ashok', percent: '89%', grade: 1}
] */
