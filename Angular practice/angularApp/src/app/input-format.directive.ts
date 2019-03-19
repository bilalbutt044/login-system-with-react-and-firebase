import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {


  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style = 'red';
  }

  @HostListener('blur') onBlur() {

    // tslint:disable-next-line:prefer-const
    let value: string  = this.el.nativeElement.value;

    // tslint:disable-next-line:triple-equals
    if (this.format == 'lowerCase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
    // tslint:disable-next-line:one-line
    else {
      this.el.nativeElement.value = value.toUpperCase();
    }
}

}
