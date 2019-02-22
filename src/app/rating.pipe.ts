import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 9) {
      return 'excellent';
    }

    if (value >= 6) {
      return 'good';
    }

    if (value >= 5) {
      return 'okay';
    }

    if (value >= 3) {
      return 'bad';
    }

    return 'awful';
  }

}
