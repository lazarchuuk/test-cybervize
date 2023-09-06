import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from "@angular/common";

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    return formatDate(date, 'dd/MM/YYYY', 'en');
  }
}
