import { CommonProps } from '../index';

interface Props extends CommonProps {
  groupClassName?: string;
  groupAttributes?: any;
  color?: string;
}

declare var InputGroupButton: React.StatelessComponent<Props>;
export default InputGroupButton;
