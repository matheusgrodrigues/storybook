import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./MButton";

export default {
  title: "Botôes/MButton",
  component: Button,
  argTypes: {
    variant: {
      table: { defaultValue: { summary: "primary" } },
      defaultValue: "primary",
      description: "Estilo do botão",
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
    text: {
      table: { defaultValue: { summary: "Clique aqui!" } },
      description: "Texto do botão",
      control: { type: "text" },
    },
    active: {
      table: { defaultValue: { summary: "True" } },
      description: "Estado do botão",
      control: { type: "boolean" },
    },
    onClick: {
      table: { defaultValue: { summary: "Function void" } },
      description: "Callback function",
      action: "Clicou",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.text}</Button>
);

export const MButton = Template.bind({});
MButton.args = { text: "Clique aqui!", active: true };
