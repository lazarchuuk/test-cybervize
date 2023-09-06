import { Pipe, PipeTransform } from '@angular/core';
import { Drug } from "../../models/data.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Drug[] | null, filter: string): Drug[] {
    if (!items) {
      return [];
    }

    if (!filter) {
      return items;
    }

    filter = filter.toLowerCase();
    return items.filter((item) =>
        item.name.toLowerCase().includes(filter)
        || item.description.toLowerCase().includes(filter)
        || item.diseases.some((disease) => disease.toLowerCase().includes(filter))
    )
  }

}
