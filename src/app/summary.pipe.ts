import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, appendEllipses?: boolean) {
    if (!value) {
      return null;
    }
    let actualLimit = (limit) ? limit : value.length;
    let extension = (appendEllipses) ? "..." : "";
    return value.substr(0, actualLimit) + extension;
  }

}
