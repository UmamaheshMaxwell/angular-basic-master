import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender: string):any  {
    if(gender === 'female') {
      return 'Ms.' + value
    } else {
      return 'Mr.' + value
    }
  }
}
