import { CSSModule } from '../index';

export interface FormTextProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const FormText: React.StatelessComponent<FormTextProps>;
export default FormText;
