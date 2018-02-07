import { CSSModule } from '../index';

export interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare const NavLink: React.StatelessComponent<NavLinkProps>;
export default NavLink;
