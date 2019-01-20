import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ButtonProps<T = {}> = ReactDOM.ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLButtonElement>;

  onClick?: ReactDOM.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: ReactDOM.CSSProperties;

  cssModule?: CSSModule;
} & T;

declare class Button<T = {[key: string]: any}> extends React.Component<ButtonProps<T>> {}
export default Button;
