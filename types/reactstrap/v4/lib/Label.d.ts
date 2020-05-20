import { CSSModule } from '../index';
import { ColumnProps } from './Col';

interface Intermediate extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: any;
}

interface Props extends Intermediate {
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

declare var Label: React.StatelessComponent<Props>;
export default Label;
