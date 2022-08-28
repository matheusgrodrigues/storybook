import MButton from "./MButton";

export default {
  title: "Example/MButton",
  component: MButton,
};

export const Primary = () => <MButton />;
export const Danger = () => <MButton variant="danger" />;
