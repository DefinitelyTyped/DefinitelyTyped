import { CSSModule } from '../index';

export interface FormTextProps {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
}

export const FormText: React.StatelessComponent<FormTextProps>;
export default FormText;
