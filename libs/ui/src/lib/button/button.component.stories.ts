import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { UiModule } from '../ui.module';

type argTypes=ButtonComponent & { ngContent: string };

const meta: Meta<argTypes> = {
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
         control: { type: 'select' },
         label: 'Button Class',
         name: 'Button Class'
      },
      size: {
         options: ['sm', 'md', 'lg'],
         control: { type: 'select' },
         label: 'Button Size',
         name: 'Button Size'
      },
      ngContent: {
         control: { type: 'text' },
         label: 'Button Text',
         name: 'Button Text'
      }
   },
   render: (args) => ({
      props: { ...args },
      userDefinedTemplate: true,
      template: '<test-nx-button [buttonClass]="buttonClass" [size]="size">{{ngContent}}</test-nx-button>',
   }),
};

export default meta;

type Story = StoryObj<argTypes>;

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

export const LargeButton: Story = {
   args: {
      ngContent: "Secondary Button",
      buttonClass: "primary",
      size: 'lg'
   }
};

export const MediumButton: Story = {
   args: {
      ngContent: "Secondary Button",
      buttonClass: "primary",
      size: 'md'
   }
};

export const SmallButton: Story = {
   args: {
      ngContent: "Secondary Button",
      buttonClass: "primary",
      size: 'sm'
   }
};