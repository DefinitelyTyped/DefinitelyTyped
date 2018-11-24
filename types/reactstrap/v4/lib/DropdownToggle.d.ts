import { CommonProps } from '../index';

interface Props extends CommonProps {
  caret?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  nav?: boolean;
  color?: string;
  size?: string;
}

declare var DropdownToggle: React.StatelessComponent<Props>;
export default DropdownToggle;
