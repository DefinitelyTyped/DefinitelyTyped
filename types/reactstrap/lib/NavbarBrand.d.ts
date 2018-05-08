import { CSSModule } from '../index';

export interface NavbarBrandProps extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const NavbarBrand: React.StatelessComponent<NavbarBrandProps>;
export default NavbarBrand;
