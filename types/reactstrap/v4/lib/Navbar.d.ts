import { CSSModule } from '../index';

interface Props {
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

declare var Navbar: React.StatelessComponent<Props>;
export default Navbar;
