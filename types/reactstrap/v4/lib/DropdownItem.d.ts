import { CommonProps } from '../index';

interface Props extends CommonProps {
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  href?: string;
}

declare var DropdownItem: React.StatelessComponent<Props>;
export default DropdownItem;
