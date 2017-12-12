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

// Intermediate interface to "redefine" the type of size to string
// size:number => size:any => size:string
interface Intermediate extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: any;
}

export interface InputProps extends Intermediate {
  type?: InputType;
  size?: string;
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
