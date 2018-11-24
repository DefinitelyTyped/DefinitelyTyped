import { CommonProps } from '../index';

interface Props extends CommonProps {
  'aria-label'?: string;
  role?: string;
  size?: string;
  vertical?: boolean;
}

declare var ButtonGroup: React.StatelessComponent<Props>;
export default ButtonGroup;
