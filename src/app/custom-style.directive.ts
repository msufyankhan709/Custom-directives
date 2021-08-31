import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red"
   }

}
