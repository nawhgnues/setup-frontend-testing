import type { ButtonHTMLAttributes, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

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
        false: "opacity-100 cursor-pointer",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  intent = "primary",
  size = "medium",
  isDisabled = false,
  ...props
}) => {
  const buttonClass = cn(
    buttonVariants({ intent, size, isDisabled, className })
  );

  return (
    <button
      className={buttonClass}
      disabled={isDisabled || undefined}
      {...props}
    >
      {children}
    </button>
  );
};
