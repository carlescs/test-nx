import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * The class of the button, which can be either 'primary' or 'secondary'.
   */
  @Input()
  public buttonClass:'primary'|'secondary'='primary';

  /**
   * The size of the button.
   * @type {'sm' | 'md' | 'lg'}
   * @default 'md'
   */
  @Input()
  public size:'sm'|'md'|'lg'='md';
}
