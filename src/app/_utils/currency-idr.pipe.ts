import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyIDR',
})
export class CurrencyIDR implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return '';
    }

    // Format the number to IDR currency
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  }
}
