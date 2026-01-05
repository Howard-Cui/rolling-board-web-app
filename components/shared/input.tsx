"use client";

import type { InputHTMLAttributes } from "react";
import { useId, useMemo } from "react";
import { mergeTwClasses } from "@/utils/styles/tailwindCss";

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const generatedId = useId();

  const inputId = id || generatedId;

  const baseClasses = mergeTwClasses(
    "w-full h-12 px-4 rounded-[8px]",
    "bg-transparent focus:bg-dark-7 border border-white/10",
    "text-white text-medium placeholder:text-dark-3",
    "transition-all duration-200",
    "focus:outline-none focus:border-gray-1",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  );

  const errorClasses = useMemo(
    () => (error ? "border-red-6 focus:border-red-6" : ""),
    [error],
  );

  const classes = mergeTwClasses(baseClasses, errorClasses, className);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-white text-small font-semibold"
        >
          {label}
        </label>
      )}
      <input id={inputId} className={classes} {...props} />
      {error && <p className="text-red-6 text-small">{error}</p>}
    </div>
  );
}

export default Input;
