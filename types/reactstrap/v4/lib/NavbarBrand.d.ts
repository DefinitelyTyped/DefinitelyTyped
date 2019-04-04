import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
}

declare var NavbarBrand: React.StatelessComponent<Props>;
export default NavbarBrand;
