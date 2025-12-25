import type { ButtonHTMLAttributes, ReactNode } from "react";
import { mergeTwClasses } from "@/utils/styles/tailwindCss";

type ButtonProps = {
  variant?: "default" | "outline" | "ghost";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<string, string> = {
  default: "bg-dark-6 hover:bg-dark-4",
  outline: "border border-white bg-transparent hover:bg-white/10",
  ghost: "bg-transparent border-none hover:bg-white/10",
};

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center text-white rounded-md px-5 h-10 text-small font-semibold cursor-pointer transition-all";

  const classes = mergeTwClasses(
    baseClasses,
    variantClasses[variant],
    className,
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
