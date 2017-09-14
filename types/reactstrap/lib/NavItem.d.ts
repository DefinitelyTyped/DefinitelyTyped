import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var NavItem: React.StatelessComponent<Props>;
export default NavItem;
