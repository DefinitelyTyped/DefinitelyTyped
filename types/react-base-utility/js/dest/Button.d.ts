/// <reference types="react" />
import ButtonInterface from '../interfaces/Button.interface';
declare const Button: import('react').MemoExoticComponent<
  ({ title, extras, icon, className }: ButtonInterface) => JSX.Element
>;
export default Button;
