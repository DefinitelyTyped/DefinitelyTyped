import { CSSModule } from '../index';
import { ButtonColor } from "./Color";

export interface InputGroupButtonProps {
  tag?: React.ReactType;
  groupClassName?: string;
  groupAttributes?: any;
  className?: string;
  cssModule?: CSSModule;
  color?: ButtonColor;
}

declare const InputGroupButton: React.StatelessComponent<InputGroupButtonProps>;
export default InputGroupButton;
