import { CSSModule } from '../index';

type InputType =
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
  type?: InputType;
  bsSize?: 'lg' | 'sm';
  state?: string;
  valid?: boolean;
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLInputElement) => any);
  plaintext?: boolean;
  addon?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare const Input: React.StatelessComponent<InputProps>;
export default Input;
