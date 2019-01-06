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

export type InputProps<T = {}> = React.InputHTMLAttributes<HTMLInputElement> & {
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
} & T;

declare class Input<T> extends React.Component<InputProps<T>> {}
export default Input;
