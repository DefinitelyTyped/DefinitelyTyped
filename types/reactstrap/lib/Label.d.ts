import { ColumnProps } from './Col';

interface Intermediate extends React.ChangeTargetHTMLProps<HTMLLabelElement> {
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
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
}

declare var Label: React.StatelessComponent<Props>;
export default Label;
