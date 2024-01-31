import { Heading } from '@atoms/Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '01 Atoms/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Headline 1',
  },
};

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Headline 2',
  },
};

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Headline 3',
  },
};

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Headline 4',
  },
};

export const H5: Story = {
  args: {
    level: 'h5',
    children: 'Headline 5',
  },
};

export const H6: Story = {
  args: {
    level: 'h6',
    children: 'Headline 6',
  },
};

export const H7: Story = {
  args: {
    level: 'h7',
    children: 'Headline 7',
  },
};
