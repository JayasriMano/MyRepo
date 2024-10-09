import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe',
  standalone: true
})
export class CustomepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
