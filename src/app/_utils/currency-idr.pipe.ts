import { Pipe, PipeTransform } from '@angular/core';
import { ConvertCurrency } from './utils';

@Pipe({
  name: 'currencyIDR',
})
export class PipeCurrencyIDR implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return '';
    }

    // Format the number to IDR currency
    return ConvertCurrency(value);
  }
}
