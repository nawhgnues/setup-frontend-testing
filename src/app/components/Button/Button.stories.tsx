import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
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
    onClick: { action: "onClick" }, // 수정된 부분
  },
  args: {
    intent: "primary",
    isDisabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Primary Button", // 텍스트 명확히 작성
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Secondary Button", // 텍스트 명확히 작성
  },
};

export const Danger: Story = {
  args: {
    intent: "danger",
    children: "Danger Button", // 텍스트 명확히 작성
  },
};
