import { CSSModule } from '../index';

export interface NavbarBrandProps extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const NavbarBrand: React.StatelessComponent<NavbarBrandProps>;
