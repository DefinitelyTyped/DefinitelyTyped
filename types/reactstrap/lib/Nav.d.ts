import { CSSModule } from '../index';

export interface NavProps extends React.HTMLProps<HTMLUListElement> {
  inline?: boolean;
  disabled?: boolean;
  tabs?: boolean;
  pills?: boolean;
  stacked?: boolean;
  navbar?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  vertical?: boolean;
}

declare const Nav: React.StatelessComponent<NavProps>;
export default Nav;
