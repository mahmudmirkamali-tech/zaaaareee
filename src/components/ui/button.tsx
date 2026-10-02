import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors transition-transform duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-fg text-bg hover:bg-fg/90",
        outline:
          "border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent",
        ghost: "text-fg hover:text-accent",
        gold: "bg-accent text-accent-fg hover:bg-accent/90",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-sm tracking-wide",
        sm: "h-9 px-4 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
