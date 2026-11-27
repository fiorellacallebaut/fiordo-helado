import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Size = "medium" | "large";

type BaseProps = {
  size?: Size;
  children: ReactNode;
  disabled?: boolean;
};

type ButtonAsButton = BaseProps & { href?: undefined } & Omit<ComponentProps<"button">, keyof BaseProps | "type" | "className">;

type ButtonAsLink = BaseProps & { href: string } & Omit<ComponentProps<typeof Link>, keyof BaseProps | "href" | "className">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// Las clases van escritas completas para que Tailwind las detecte.
// Los estados default/hover/press de Figma son :hover y :active, no props.
const base =
 "inline-flex w-full md:w-fit items-center justify-center gap-4 rounded-md font-body text-body font-(weight:--text-body--font-weight-medium) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text";
const enabled =
  "bg-primary text-on-primary inset-ring-1 inset-ring-on-primary hover:bg-primary-hover active:bg-primary-hover active:inset-ring-2";

const disabledStyle = "cursor-not-allowed bg-surface-muted text-text-muted inset-ring-1 inset-ring-border";

const sizes: Record<Size, string> = {
  medium: "px-16 py-8",
  large: "h-48 px-24",
};

const classes = (size: Size, disabled: boolean) =>
  `${base} ${sizes[size]} ${disabled ? disabledStyle : enabled}`;

export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, size = "medium", disabled = false, children, ...rest } = props;
    // Un link no puede estar disabled de forma nativa: se renderiza como texto no navegable.
    if (disabled) {
      return (
        <span aria-disabled="true" className={classes(size, true)}>
          {children}
        </span>
      );
    }
    return (
      <Link href={href} className={classes(size, false)} {...rest}>
        {children}
      </Link>
    );
  }

  const { size = "medium", disabled = false, children, ...rest } = props;
  return (
    <button type="button" disabled={disabled} className={classes(size, disabled)} {...rest}>
      {children}
    </button>
  );
}
