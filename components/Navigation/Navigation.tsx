"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import logo from "@/assets/logo-n.svg";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export type Language = "UA" | "EN";

export type NavigationProps = {
  /** Пункти меню: `id`, текст і адреса (`#work`). */
  items: NavigationItem[];
  /** `id` активного пункту: він підкреслений лінією `line`. */
  activeId?: string;
  /** Початкова мова перемикача. */
  language?: Language;
  /** Викликається, коли користувач обрав іншу мову. */
  onLanguageChange?: (language: Language) => void;
  /** Ім'я поруч із логотипом. */
  brandName?: string;
  /** Підпис кнопки меню на телефоні. */
  menuLabel?: string;
  /** Підпис кнопки закриття меню на телефоні. */
  closeLabel?: string;
};

const linkBase =
  "inline-flex min-h-control items-center border-b-2 text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

function LanguageSwitch({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-control border border-ink"
    >
      {(["UA", "EN"] as const).map((code) => {
        const selected = code === language;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(code)}
            className={`inline-flex min-h-control items-center justify-center rounded-control px-6 text-label ${focusRing} ${
              selected ? "bg-ink text-canvas" : "text-ink hover:bg-surface"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Шапка сайту: логотип, пункти меню, перемикач мови. На вузькому екрані пункти
 * ховаються в меню, яке відкривається кнопкою.
 */
export function Navigation({
  items,
  activeId,
  language = "UA",
  onLanguageChange,
  brandName = "Natalia Vnukova",
  menuLabel = "Меню",
  closeLabel = "Закрити меню",
}: NavigationProps) {
  const [lang, setLang] = useState<Language>(language);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const changeLanguage = (next: Language) => {
    setLang(next);
    onLanguageChange?.(next);
  };

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  // Відкрите меню: фокус на перший пункт, Escape закриває, Tab ходить по колу.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [
        buttonRef.current,
        ...(panelRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
      ].filter((el): el is HTMLElement => el !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header ref={rootRef} className="relative bg-canvas">
      <div className="px-page-sm md:px-page-md lg:px-page-lg">
        <div className="flex items-center justify-between gap-6 border-b border-line py-6">
          <a
            href="#top"
            className={`inline-flex min-h-control items-center gap-3 ${focusRing}`}
          >
            <Image src={logo} alt="" width={44} height={48} priority />
            <span className="text-body">{brandName}</span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-nav-gap">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={item.id === activeId ? "location" : undefined}
                    className={`${linkBase} ${
                      item.id === activeId ? "border-line" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitch language={lang} onChange={changeLanguage} />
          </div>

          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? closeLabel : menuLabel}
            onClick={() => (open ? close(false) : setOpen(true))}
            className={`inline-flex min-h-control min-w-control items-center justify-center rounded-control border border-ink text-ink lg:hidden ${focusRing}`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          className="absolute inset-x-0 top-full z-10 border-b border-line bg-canvas px-page-sm py-6 md:px-page-md lg:hidden"
        >
          <nav aria-label="Main">
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => close(false)}
                    aria-current={item.id === activeId ? "location" : undefined}
                    className={`${linkBase} ${
                      item.id === activeId ? "border-line" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6">
            <LanguageSwitch language={lang} onChange={changeLanguage} />
          </div>
        </div>
      )}
    </header>
  );
}
