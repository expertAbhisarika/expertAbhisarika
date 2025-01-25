import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split(' ').reverse().join(' ');
  }

}
