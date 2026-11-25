import { Onest, Playfair_Display } from "next/font/google";

// Шрифти підключаються тут, щоб їх бачили і сайт (layout), і Storybook (preview).
export const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const fontVariables = `${onest.variable} ${playfair.variable}`;
