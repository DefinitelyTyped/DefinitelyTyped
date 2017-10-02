import { CSSModule } from '../index';

interface NavbarBrand {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var NavbarBrand: React.StatelessComponent<React.HTMLProps<any>>;
export default NavbarBrand;
