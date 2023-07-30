import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() 
  public buttonClass:'primary'|'secondary'='primary';
}
