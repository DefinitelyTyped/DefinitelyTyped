import { CSSModule } from '../index';
import { ButtonColor } from './Color'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);

  onClick?: React.MouseEventHandler<any>;
  size?: 'sm' | 'lg';
  id?: string;
  style?: React.CSSProperties;

  cssModule?: CSSModule;
}

declare const Button: React.StatelessComponent<ButtonProps>;
export default Button;
