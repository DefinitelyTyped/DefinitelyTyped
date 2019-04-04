import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ElementType;
  type?: string;
  className?: string;
  cssModule?: CSSModule;
  right?: boolean;
  left?: boolean;
}

declare var NavbarToggler: React.StatelessComponent<Props>;
export default NavbarToggler;
