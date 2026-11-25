import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
    href: { control: "text" },
    children: { control: "text" },
  },
  args: {
    children: "Переглянути роботи",
    variant: "primary",
    disabled: false,
    disabledReason: "Скоро буде доступно",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
