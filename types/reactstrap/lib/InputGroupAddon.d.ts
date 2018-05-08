import { CSSModule } from '../index';

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  addonType: 'prepend' | 'append';
  [others: string]: any;
}

declare const InputGroupAddon: React.StatelessComponent<InputGroupAddonProps>;
export default InputGroupAddon;
