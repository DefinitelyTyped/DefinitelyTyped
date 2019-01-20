import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var NavbarBrand: React.StatelessComponent<Props>;
export default NavbarBrand;
