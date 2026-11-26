// Site copy in both languages.
// First-screen text is the approved version from docs/site-plan.md (section 3).

export type Language = "ua" | "en";

export const languages: { code: Language; label: string }[] = [
  { code: "ua", label: "UA" },
  { code: "en", label: "EN" },
];

// Name shown in the header (plan, section 3.1) — same in both languages.
export const brandName = "Natalia Vnukova";

// Contact is email only (plan, section 3.6).
export const contactEmail = "natalia.a.vnukova@gmail.com";

export const content = {
  ua: {
    homeLabel: "Natalia Vnukova — на головну",
    navLabel: "Основна навігація",
    languageLabel: "Мова сайту",
    nav: [
      { label: "Роботи", href: "#work" },
      { label: "Про мене", href: "#about" },
      { label: "Підхід", href: "#approach" },
      { label: "Контакт", href: "#contact" },
    ],
    hero: {
      photoAlt: "Портрет Наталі Внукової",
      greeting: "Привіт, я ",
      name: "Наталя",
      role: "UI/UX та Product Designer",
      subtitle: "Проєктую вебсервіси для бізнесу, якими просто користуватися.",
      primaryAction: "Переглянути роботи",
      secondaryAction: "Написати мені",
    },
  },
  en: {
    homeLabel: "Natalia Vnukova — home",
    navLabel: "Main navigation",
    languageLabel: "Site language",
    nav: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Approach", href: "#approach" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      photoAlt: "Portrait of Natalia Vnukova",
      greeting: "Hi, I’m ",
      name: "Natalia",
      role: "a UI/UX and Product Designer",
      subtitle: "I design web services for businesses that are simple to use.",
      primaryAction: "View my work",
      secondaryAction: "Get in touch",
    },
  },
} as const;
