import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: number, discount: number): number {
    value = value - discount;
    return value ;
    /*if (value > 100) {
      return 'Expensive';
    } else if (value > 20) {
      return 'Average';
    } else {
      return 'Cheap';
    }*/
  }

}
