import { CSSModule } from '../index';

export interface NavbarProps {
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  full?: boolean;
  fixed?: string;
  sticky?: string;
  color?: string;
  role?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  toggleable?: boolean | string;
  expand?: boolean | string;
}

declare const Navbar: React.StatelessComponent<NavbarProps>;
export default Navbar;
