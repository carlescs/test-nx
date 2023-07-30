import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() 
  /**
   * The class of the button, which can be either 'primary' or 'secondary'.
   */
  public buttonClass:'primary'|'secondary'='primary';
}
