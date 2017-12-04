import { CSSModule } from '../index';

export interface NavItemProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const NavItem: React.StatelessComponent<NavItemProps>;
export default NavItem;
