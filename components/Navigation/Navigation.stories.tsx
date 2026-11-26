import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { id: "work", label: "Роботи", href: "#work" },
  { id: "about", label: "Про мене", href: "#about" },
  { id: "approach", label: "Підхід", href: "#approach" },
  { id: "contact", label: "Контакт", href: "#contact" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: { layout: "fullscreen" },
  argTypes: {
    activeId: {
      control: "select",
      options: ["work", "about", "approach", "contact", "none"],
    },
    language: { control: "select", options: ["UA", "EN"] },
    brandName: { control: "text" },
    menuLabel: { control: "text" },
    closeLabel: { control: "text" },
  },
  args: {
    items,
    activeId: "work",
    language: "UA",
    brandName: "Natalia Vnukova",
    menuLabel: "Меню",
    closeLabel: "Закрити меню",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Navigation key={args.language} {...args} />,
};
