import { Button, ButtonProps } from "react-bootstrap";

export default function MButton({variant = "primary"}: ButtonProps) {
  return <Button variant={variant}>test</Button>;
}
