import { Paragraph } from '@atoms/Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '01 Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Subtitle1: Story = {
  args: {
    size: 'subtitle-1',
    children: 'Subtitle 1',
  },
};

export const Subtitle2: Story = {
  args: {
    size: 'subtitle-2',
    children: 'Subtitle 2',
  },
};

export const Body1: Story = {
  args: {
    size: 'body-1',
    children: 'Body 1',
  },
};

export const Body2: Story = {
  args: {
    size: 'body-2',
    children: 'Body 2',
  },
};

export const Chips: Story = {
  args: {
    size: 'chips',
    children: 'Chips / Estados',
  },
};
