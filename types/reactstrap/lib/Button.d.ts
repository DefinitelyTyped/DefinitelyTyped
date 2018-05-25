import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLButtonElement>;

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;

  cssModule?: CSSModule;
}

declare class Button extends React.Component<ButtonProps> {}
export default Button;
