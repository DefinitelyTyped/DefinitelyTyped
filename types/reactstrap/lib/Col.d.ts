export type ColumnProps
  = string
  | boolean
  | number
  | {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
  };

interface Props {
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;

  //custom widths
  widths?: string[];
}

declare var Col: React.StatelessComponent<Props>;
export default Col;
