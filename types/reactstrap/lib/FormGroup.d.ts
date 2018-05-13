import { CSSModule } from '../index';

export interface FormGroupProps extends React.HTMLProps<HTMLDivElement> {
  row?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const FormGroup: React.StatelessComponent<FormGroupProps>;
export default FormGroup;
