import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface NavbarProps {
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  full?: boolean;
  fixed?: string;
  sticky?: string;
  color?: ThemeColor | "faded";
  role?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  toggleable?: boolean | string;
  expand?: boolean | string;
}

declare const Navbar: React.StatelessComponent<NavbarProps>;
export default Navbar;
