import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLButtonElement) => any);
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: ReactDOM.MouseEventHandler<any>;
  href?: string;
}

declare var NavLink: React.StatelessComponent<Props>;
export default NavLink;
