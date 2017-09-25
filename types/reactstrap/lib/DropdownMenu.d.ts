import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare var DropdownMenu: React.StatelessComponent<Props>;
export default DropdownMenu;
