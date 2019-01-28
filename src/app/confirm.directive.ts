import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @HostListener('click', ['$event'])
  requestConfirmation(event: Event) {
    if (!window.confirm('Are you sure?')) {
      console.log('Cancelled');
      return;
    }

    console.log('Confirmed');
  }
}
