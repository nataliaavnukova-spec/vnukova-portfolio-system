import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/cover-placeholder.svg";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div className="max-w-96 p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    href: { control: "text" },
    linkLabel: { control: "text" },
    imageAlt: { control: "text" },
    image: { control: false },
  },
  args: {
    title: "Назва проєкту",
    description: "Короткий опис проєкту: для кого він і яку задачу вирішує.",
    href: "#project",
    linkLabel: "Дивитись проєкт",
    image: cover,
    imageAlt: "",
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
