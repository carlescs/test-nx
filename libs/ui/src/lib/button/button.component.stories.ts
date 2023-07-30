import { moduleMetadata, type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { UiModule } from '../ui.module';

const meta: Meta<typeof ButtonComponent> = {
   component: ButtonComponent,
   title: 'Button',
   decorators: [
      moduleMetadata({
         imports: [UiModule],
      }),
   ],
   render: (args) => ({
      props: args,
      userDefinedTemplate: true,
      template: '<test-nx-button>Button</test-nx-button>',
   }),
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
   parameters: {
      type: 'button',
   }
};