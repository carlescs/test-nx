import { type Meta, type StoryObj } from '@storybook/angular';

import {ButtonComponent} from './button.component';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button'
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  parameters:{
    type: 'button',
  }
};