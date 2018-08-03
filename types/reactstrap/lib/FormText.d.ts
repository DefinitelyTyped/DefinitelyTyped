import { CSSModule } from '../index';
import { TextColor } from "./Color";

export interface FormTextProps {
  inline?: boolean;
  tag?: React.ReactType;
  color?: TextColor;
  className?: string;
  cssModule?: CSSModule;
}

declare const FormText: React.StatelessComponent<FormTextProps>;
export default FormText;
