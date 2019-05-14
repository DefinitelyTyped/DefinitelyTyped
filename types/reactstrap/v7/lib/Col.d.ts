import * as React from 'react';

export type ColumnProps
  = string
  | boolean
  | number
  | {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
    order?: string | number
  };

export type ColProps<T = {}> = React.HTMLProps<HTMLDivElement> & {
  tag?: React.ReactType;
  xs?: ColumnProps;
  sm?: ColumnProps;
  md?: ColumnProps;
  lg?: ColumnProps;
  xl?: ColumnProps;

  // custom widths
  widths?: string[];
} & T;

declare class Col<T = {[key: string]: any}> extends React.Component<ColProps<T>> {}
export default Col;
