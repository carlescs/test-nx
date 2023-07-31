import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { TextBoxComponent } from './text-box.component';
import { UiModule } from '../ui.module';

type argTypes=TextBoxComponent;

const meta: Meta<argTypes> = {
   component: TextBoxComponent,
   title: 'TextBox',
   tags: ['autodocs'],
   decorators: [
      moduleMetadata({
         imports: [UiModule],
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
