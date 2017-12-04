import { CSSModule } from '../index';

export interface InputGroupButtonProps {
  tag?: React.ReactType;
  groupClassName?: string;
  groupAttributes?: any;
  className?: string;
  cssModule?: CSSModule;
  color?: string;
}

declare const InputGroupButton: React.StatelessComponent<InputGroupButtonProps>;
export default InputGroupButton;
