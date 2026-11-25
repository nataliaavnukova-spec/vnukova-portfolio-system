import type { Preview } from "@storybook/nextjs-vite";
import { fontVariables } from "../app/fonts";
import "../app/globals.css";

// Змінні шрифтів потрібні й на MDX-сторінках (Docs), куди декоратори не діють.
if (typeof document !== "undefined") {
  document.documentElement.classList.add(...fontVariables.split(" "));
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="font-sans text-ink bg-canvas">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
