import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeBackground'
})
export class SanitizeBackgroundPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: string): SafeStyle {
    return this._sanitizer.bypassSecurityTrustStyle('url(' + value + ')');
  }
}
