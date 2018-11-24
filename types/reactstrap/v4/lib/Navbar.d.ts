import { CommonProps } from '../index';

interface Props extends CommonProps {
  light?: boolean;
  dark?: boolean;
  inverse?: boolean;
  full?: boolean;
  fixed?: string;
  sticky?: string;
  color?: string;
  role?: string;
  toggleable?: boolean | string;
  expand?: boolean | string;
}

declare var Navbar: React.StatelessComponent<Props>;
export default Navbar;
