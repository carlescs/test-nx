import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '@test-nx/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule, FormsModule],
  selector: 'ccs-root',
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

  /**
   * This is a test property.
   */
  public test:string='';
}
