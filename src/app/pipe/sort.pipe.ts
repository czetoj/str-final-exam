import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    return value.sort(function (a, b) {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key];
      } else {
        return a[key].toString().toLowerCase().localeCompare(b[key].toString().toLowerCase());
      }
    })
  }

}
