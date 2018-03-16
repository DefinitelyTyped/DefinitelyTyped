import { CSSModule } from '../index';

export interface NavProps extends React.HTMLProps<HTMLUListElement> {
  tabs?: boolean;
  pills?: boolean;
  vertical?: boolean | string;
  horizontal?: string;
  justified?: boolean;
  fill?: boolean;
  navbar?: boolean;
  card?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const Nav: React.StatelessComponent<NavProps>;
export default Nav;
