import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
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

declare class Button<T = {[key: string]: any}> extends React.Component<ButtonProps> {}
export default Button;
