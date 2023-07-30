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
   argTypes: {
      buttonClass: {
         options: ['primary', 'secondary'],
         control: { type: 'select' }
      }
   }
};

export default meta;

type Story = StoryObj<ButtonComponent & { ngContent: string }>;

export const PrimaryButton: Story = {
   args: {
      ngContent: "Primary Button",
      buttonClass: "primary"
   },
   render: (args) => ({
      props: { ...args },
      userDefinedTemplate: true,
      template: '<test-nx-button [buttonClass]="buttonClass">{{ngContent}}</test-nx-button>',
   }),
};

export const SecondaryButton: Story = {
   args: {
      ngContent: "Secondary Button",
      buttonClass: "secondary"
   },
   render: (args) => ({
      props: { ...args },
      userDefinedTemplate: true,
      template: '<test-nx-button [buttonClass]="buttonClass">{{ngContent}}</test-nx-button>',
   }),
};