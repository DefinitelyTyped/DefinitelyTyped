import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  groupClassName?: string;
  groupAttributes?: any;
  className?: string;
  cssModule?: CSSModule;
  color?: string;
}

declare var InputGroupButton: React.StatelessComponent<Props>;
export default InputGroupButton;
