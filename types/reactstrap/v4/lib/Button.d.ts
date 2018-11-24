import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'button'> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  getRef?: string | ((instance: HTMLButtonElement) => any);

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;
}

declare var Button: React.StatelessComponent<Props>;
export default Button;
