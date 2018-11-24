import { CommonProps } from '../index';

interface Props extends CommonProps {
  'aria-label'?: string;
  role?: string;
}

declare var ButtonToolbar: React.StatelessComponent<Props>;
export default ButtonToolbar;
