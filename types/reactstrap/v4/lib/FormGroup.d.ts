import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLDivElement> {
  row?: boolean;
  check?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var FormGroup: React.StatelessComponent<Props>;
export default FormGroup;
