import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: string[], searcStr?: string): any {
    const regx = new RegExp(`${searcStr}`);
    return value.filter(c => regx.test(c));
  }
}
