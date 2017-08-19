import { ColumnProps } from './Col';

interface Props {
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