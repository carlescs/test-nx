import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
   standalone: true,
   imports: [CommonModule, FormsModule],
   selector: 'ccs-text-box',
   templateUrl: './text-box.component.html',
   styleUrls: ['./text-box.component.scss'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => TextBoxComponent),
         multi: true,
      },
   ],
})
/**
 * Text box component that implements ControlValueAccessor for form integration.
 */
export class TextBoxComponent implements ControlValueAccessor {
   /**
    * The value of the text box.
    */
   public value = '';
   /**
    * A callback function that is called when the value of the text box changes.
    */
   public onChange?: (value: string) => void;
   /**
    * A callback function that is called when the user touches the text box.
    */
   public onTouch?: () => void;
   /**
    * Indicates whether the text box is disabled or not.
    */
   public disabled = false;

   /**
    * Writes a new value to the text box.
    * @param value The new value to write.
    */
   public writeValue(value: string): void {
      this.value = value;
   }

   /**
    * Registers a callback function to be called when the value of the control changes.
    * @param fn The callback function to register.
    */
   public registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
   }

   /**
    * Registers a callback function that should be called when the control receives a blur event.
    * This is used by the forms API to update the control's state when it has been touched by the user.
    * @param fn The callback function to register.
    */
   public registerOnTouched(fn: () => void): void {
      this.onTouch = fn;
   }

   /**
    * Sets the disabled state of the text box.
    * @param isDisabled Whether the text box should be disabled or not.
    */
   public setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
   }

   /**
    * Calls the onChange function with the new value when the text box value changes.
    * @param value - The new value of the text box.
    */
   public valueChanged(value: string): void {
      if (this.onChange) {
         this.onChange(value);
      }
   }

   /**
    * Handles the touch event for the text box component.
    * If the `onTouch` function is defined, it will be called.
    */
   public handleTouch(): void {
      if (this.onTouch) {
         this.onTouch();
      }
   }
}
