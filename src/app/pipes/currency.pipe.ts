import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyIndia'
})
export class CurrencyPipe implements PipeTransform {

  transform(value:number): any  {
    return "₹" + value;
  }

}
