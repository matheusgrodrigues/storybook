import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./MButton";

export default {
  title: "Botôes/MButton",
  component: Button,
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
        "link",
        "outline-primary",
        "outline-secondary",
        "outline-success",
        "outline-danger",
        "outline-warning",
        "outline-info",
        "outline-dark",
        "outline-light",
      ],
      control: { type: "select" },
    },
    onClick: { action: "Clicou" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const MButton = Template.bind({});
MButton.args = { variant: "primary", children: "Clique aqui", active: true };
