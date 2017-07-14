import {CSSModule} from '../index';

interface Props {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: React.MouseEvent<any>;
  className?: string;
  cssModule?: CSSModule;
}

declare var DropdownItem: React.StatelessComponent<Props>;
export default DropdownItem;
