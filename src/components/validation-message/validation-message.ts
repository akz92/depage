import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'validation-message',
  templateUrl: 'validation-message.html'
})
export class ValidationMessageComponent {
  @Input()
  public control: FormControl;
}
