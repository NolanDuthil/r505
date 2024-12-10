import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRightIcon }  from "@/components/ui/icons";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "text-foreground",
      },
      size: {
        default: "px-4 py-2 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={`${buttonVariants({ variant, size })} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
        <span className="ml-2 inline-flex items-center border-2 border-black justify-center w-8 h-8 text-foreground rounded-full">
          <ArrowRightIcon className="w-6" />
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };