import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
/**
 * Represents a button component with customizable class, size, and type.
 */
export class ButtonComponent {
  /**
   * The class of the button, which can be either 'primary', 'secondary', 'danger', 'warning', or 'success'.
   * @default 'primary'
   */
  @Input()
  public buttonClass: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' = 'primary';

  /**
   * The size of the button.
   * @type {'sm' | 'md' | 'lg'}
   * @default 'md'
   */
  @Input()
  public size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The type of the button. Can be one of 'button', 'submit', or 'reset'.
   */
  @Input()
  public type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Event emitter that emits an event when the button is clicked.
   */
  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter<void>();
  
  /**
   * Emits an event when the button is double-clicked.
   */
  @Output()
  public buttonDblClick: EventEmitter<void> = new EventEmitter<void>();
}
