import type { Meta, StoryObj } from "@storybook/react";

import ButtonsDemo from "./ButtonsDemo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "StyleX/ButtonsDemo",
  component: ButtonsDemo,
} satisfies Meta<typeof ButtonsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
