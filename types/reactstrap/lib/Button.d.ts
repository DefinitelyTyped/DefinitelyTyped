import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLButtonElement) => any);

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;

  cssModule?: CSSModule;
}

declare var Button: React.StatelessComponent<Props>;
export default Button;
