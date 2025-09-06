import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TextBoxComponent } from './components/textbox/text-box.component';

@NgModule({
   imports: [CommonModule, FormsModule],
   declarations: [ButtonComponent, TextBoxComponent],
   exports: [ButtonComponent, TextBoxComponent],
})
/**
 * UI module that exports common UI components.
 */
export class UiModule {}
