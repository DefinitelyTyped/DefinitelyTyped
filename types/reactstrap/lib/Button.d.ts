import * as React from 'react';
import { CSSModule } from '../index';

export type ButtonProps<T = {}> = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
} & T;

declare class Button<T = {[key: string]: any}> extends React.Component<ButtonProps<T>> {}
export default Button;
