"use client";

import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
} & (
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

const baseStyles =
  "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-tr from-brand-500 via-brand-400 to-sky-400 text-white shadow-[0_18px_45px_rgba(31,111,255,0.35)] hover:shadow-[0_25px_60px_rgba(31,111,255,0.45)]",
  secondary:
    "border border-white/15 backdrop-blur-md bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/80 hover:text-white/100"
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
