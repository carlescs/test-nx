import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextBoxComponent } from './textbox/text-box.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule
   ],
   declarations: [
      ButtonComponent,
      TextBoxComponent
   ],
   exports: [
      ButtonComponent,
      TextBoxComponent
   ],
})
export class UiModule { }
