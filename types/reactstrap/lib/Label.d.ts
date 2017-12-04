import { CSSModule } from '../index';
import { ColumnProps } from './Col';

interface Intermediate extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: any;
}

export interface LabelProps extends Intermediate {
  hidden?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  size?: string;
  for?: string;
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
}

declare const Label: React.StatelessComponent<LabelProps>;
export default Label;
