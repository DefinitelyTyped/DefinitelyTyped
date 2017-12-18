import { CSSModule } from '../index';

export interface FormTextProps {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare const FormText: React.StatelessComponent<FormTextProps>;
export default FormText;
