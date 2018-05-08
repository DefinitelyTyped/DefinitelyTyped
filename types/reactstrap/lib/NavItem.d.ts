import { CSSModule } from '../index';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const NavItem: React.StatelessComponent<NavItemProps>;
export default NavItem;
