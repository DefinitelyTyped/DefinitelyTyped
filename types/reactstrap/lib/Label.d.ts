import * as React from 'react';
import { CSSModule } from '../index';
import { ColumnProps } from './Col';

type Intermediate = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: any;
};

export type LabelProps<T = {}> = Intermediate & {
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
} & T;

declare class Label<T = {[key: string]: any}> extends React.Component<LabelProps<T>> {}
export default Label;
