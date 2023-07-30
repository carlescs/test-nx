import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { UiModule } from '../ui.module';

const meta: Meta<ButtonComponent> = {
   component: ButtonComponent,
   title: 'Button',
   tags: ['autodocs'],
   decorators: [
      moduleMetadata({
         imports: [UiModule],
      }),
   ],
   args:{
      buttonClass: 'primary',
      size: 'md'
   },
   argTypes: {
      buttonClass: {
         options: ['primary', 'secondary','danger','warning','success'],
         control: { type: 'select' }
      },
      size: {
         options: ['sm', 'md', 'lg'],
         control: { type: 'select' }
      }
   },
   render: (args) => ({
      props: { ...args },
      userDefinedTemplate: true,
      template: '<test-nx-button [buttonClass]="buttonClass" [size]="size">{{ngContent}}</test-nx-button>',
   }),
};

export default meta;

type Story = StoryObj<ButtonComponent & { ngContent: string }>;

export const PrimaryButton: Story = {
   args: {
      ngContent: "Primary Button",
      buttonClass: "primary"
   }
};

export const SecondaryButton: Story = {
   args: {
      ngContent: "Secondary Button",
      buttonClass: "secondary"
   }
};