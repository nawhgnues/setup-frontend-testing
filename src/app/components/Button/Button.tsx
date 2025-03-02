import React, { FC } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  intent?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
}

export const buttonVariants = cva(
  "px-4 py-2 bg-blue-500 text-white rounded cursor-pointer",
  {
    variants: {
      intent: {
        primary: "bg-blue-500",
        secondary: "bg-gray-400",
        danger: "bg-red-400",
      },
      size: {
        small: "px-4 py-2",
        medium: "px-6 py-3",
        large: "px-10 py-5",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export const Button: FC<ButtonProps> = ({
  children,
  intent = "primary",
  size = "medium",
  isDisabled = false,
}) => {
  const buttonClass = cn(buttonVariants({ intent, size, isDisabled }));

  return (
    <button className={buttonClass} disabled={isDisabled}>
      {children}
    </button>
  );
};
