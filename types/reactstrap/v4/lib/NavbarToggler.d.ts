import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  type?: string;
  className?: string;
  cssModule?: CSSModule;
  right?: boolean;
  left?: boolean;
}

declare var NavbarToggler: React.StatelessComponent<Props>;
export default NavbarToggler;
