import * as React from 'react';
import { CSSModule } from '../index';
import { ColumnProps } from './Col';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
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

declare class Label<T = {[key: string]: any}> extends React.Component<LabelProps> {}
export default Label;
