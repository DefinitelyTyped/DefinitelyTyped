import * as React from 'react';
import { CSSModule } from '../index';

export type InputType =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  type?: InputType;
  bsSize?: 'lg' | 'sm';
  state?: string;
  valid?: boolean;
  invalid?: boolean;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLInputElement>;
  plaintext?: boolean;
  addon?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare class Input<T> extends React.Component<InputProps> {}
export default Input;
