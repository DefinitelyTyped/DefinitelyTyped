import { CommonProps } from '../index';

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
interface Intermediate extends React.ComponentPropsWithoutRef<'input'> {
  size?: any;
}

interface InputProps extends CommonProps, Intermediate {
  type?: InputType;
  size?: string;
  state?: string;
  valid?: boolean;
  getRef?: string | ((instance: HTMLInputElement) => any);
  static?: boolean;
  addon?: boolean;
}

declare var Input: React.StatelessComponent<InputProps>;
export default Input;
