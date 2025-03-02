import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    isDisabled: {
      control: { type: "select" },
      options: [true, false],
    },
  },
  args: {
    intent: "primary",
    isDisabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    children: "primary",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "secondary",
  },
};

export const Danger: Story = {
  args: {
    intent: "danger",
    children: "danger",
  },
};
