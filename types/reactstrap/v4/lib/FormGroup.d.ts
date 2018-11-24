import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'div'> {
  row?: boolean;
  check?: boolean;
  disabled?: boolean;
  color?: string;
}

declare var FormGroup: React.StatelessComponent<Props>;
export default FormGroup;
