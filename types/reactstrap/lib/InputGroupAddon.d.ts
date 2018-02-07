import { CSSModule } from '../index';

export interface InputGroupAddonProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const InputGroupAddon: React.StatelessComponent<InputGroupAddonProps>;
export default InputGroupAddon;
