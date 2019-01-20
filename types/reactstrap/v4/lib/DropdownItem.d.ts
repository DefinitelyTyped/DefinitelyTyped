import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: ReactDOM.MouseEvent<any>) => void;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

declare var DropdownItem: React.StatelessComponent<Props>;
export default DropdownItem;
