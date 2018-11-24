import { CommonProps } from '../index';
import { ColumnProps } from './Col';

interface Intermediate extends React.ComponentPropsWithoutRef<'label'> {
  size?: any;
}

interface Props extends CommonProps, Intermediate {
  hidden?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  size?: string;
  for?: string;
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;
}

declare var Label: React.StatelessComponent<Props>;
export default Label;
