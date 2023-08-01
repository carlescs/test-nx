import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { TextBoxComponent } from './text-box.component';
import { UiModule } from '../ui.module';
import { FormsModule } from '@angular/forms';

type argTypes=TextBoxComponent;

const meta: Meta<argTypes> = {
   component: TextBoxComponent,
   title: 'TextBox',
   tags: ['autodocs'],
   decorators: [
      moduleMetadata({
         imports: [UiModule,FormsModule],
      }),
   ],
   args:{
      
   },
   argTypes: {}
};

export default meta;

type Story = StoryObj<argTypes>;

export const Default: Story = {
   args: {}
};

export const Disabled: Story = {
    args: {
        disabled:true
    }
 };

 export const Error: Story = {
   args: {
       
   },
   render: (story)=>({
      template: `<ccs-text-box class="ng-invalid ng-touched"></ccs-text-box>`,
   })
};
