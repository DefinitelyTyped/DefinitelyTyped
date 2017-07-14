import {CSSModule} from '../index';

interface Props {
  row?: boolean;
  check?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: boolean;
  cssModule?: CSSModule;
}

declare var FormGroup: React.StatelessComponent<Props>;
export default FormGroup;
