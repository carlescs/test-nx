import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@test-nx/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiModule],
  selector: 'test-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
}
