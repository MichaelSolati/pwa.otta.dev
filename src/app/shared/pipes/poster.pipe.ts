import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {
  transform(value: string): string {
    return 'https://image.tmdb.org/t/p/w300' + value;
  }
}
