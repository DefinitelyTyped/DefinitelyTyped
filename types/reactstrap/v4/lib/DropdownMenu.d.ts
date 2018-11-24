import { CommonProps } from '../index';

interface Props extends CommonProps {
  right?: boolean;
}

declare var DropdownMenu: React.StatelessComponent<Props>;
export default DropdownMenu;
