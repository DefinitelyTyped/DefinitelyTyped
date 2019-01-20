import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLButtonElement) => any);

  onClick?: ReactDOM.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: ReactDOM.CSSProperties;

  cssModule?: CSSModule;
}

declare var Button: React.StatelessComponent<Props>;
export default Button;
