import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@test-nx/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule],
  selector: 'test-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Displays a simple alert with the message "Hello World!".
   */
  public showAlert(): void{
    alert('Hello World!');
  }
}
