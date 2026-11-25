import type { MouseEvent, ReactNode } from "react";
import { useId } from "react";

export type ButtonProps = {
  /** Вигляд: `primary` — залита, головна дія; `secondary` — без заливки, другорядна дія. */
  variant?: "primary" | "secondary";
  /** Текст кнопки. */
  children: ReactNode;
  /** Якщо задано, кнопка стає посиланням (`#work`, `mailto:…`, адреса сторінки). */
  href?: string;
  /** Вимкнена кнопка. Лишається в порядку Tab і читається скрінрідером (`aria-disabled`), але нічого не робить. */
  disabled?: boolean;
  /** Пояснення, чому кнопка вимкнена. Озвучується скрінрідером. */
  disabledReason?: string;
  /** Обробник кліку. */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

const base =
  "inline-flex min-h-control items-center justify-center rounded-control border px-8 py-4 text-label whitespace-nowrap " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const variants = {
  primary: "border-ink bg-ink text-canvas hover:bg-ink-muted hover:border-ink-muted",
  secondary: "border-ink-muted bg-transparent text-ink hover:bg-surface",
} as const;

const disabledStyle =
  "cursor-not-allowed border-ink-muted bg-surface text-ink-muted";

/**
 * Кнопка дизайн-системи. Рендериться як `<a>`, якщо є `href`, інакше як `<button>`.
 */
export function Button({
  variant = "primary",
  children,
  href,
  disabled = false,
  disabledReason,
  onClick,
}: ButtonProps) {
  const reasonId = useId();
  const className = `${base} ${disabled ? disabledStyle : variants[variant]}`;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const reason =
    disabled && disabledReason ? (
      <span id={reasonId} className="sr-only">
        {disabledReason}
      </span>
    ) : null;

  const shared = {
    className,
    onClick: handleClick,
    "aria-disabled": disabled || undefined,
    "aria-describedby": reason ? reasonId : undefined,
  };

  if (href !== undefined) {
    return (
      <a href={disabled ? undefined : href} role={disabled ? "link" : undefined} {...shared}>
        {children}
        {reason}
      </a>
    );
  }

  return (
    <button type="button" {...shared}>
      {children}
      {reason}
    </button>
  );
}
