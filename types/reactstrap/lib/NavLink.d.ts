import {CSSModule} from '../index';

interface Props {
  tag?: React.ReactType;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare var NavLink: React.StatelessComponent<Props>;
export default NavLink;
