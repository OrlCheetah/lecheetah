import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded-2xl font-medium shadow hover:shadow-md transition bg-blue-600 text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
