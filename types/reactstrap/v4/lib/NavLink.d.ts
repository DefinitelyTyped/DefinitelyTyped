import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLButtonElement) => any);
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare var NavLink: React.StatelessComponent<Props>;
export default NavLink;
