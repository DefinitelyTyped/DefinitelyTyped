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

interface InputProps extends Intermediate {
  type?: InputType;
  size?: string;
  state?: string;
  valid?: boolean;
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLInputElement) => any);
  static?: boolean;
  addon?: boolean;
  className?: string;
  cssModule?: CSSModule;
  // We don't have the property 'static' here because 'static' is a reserved keyword in TypeScript
  // Maybe reactstrap will support an 'isStatic' alias in the future
}

declare var Input: React.StatelessComponent<InputProps>;
export default Input;
