import * as React from 'react';
import { CSSModule } from '../index';

export type TableProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  inverse?: boolean;
  hover?: boolean;
  reflow?: boolean;
  responsive?: boolean;
  tag?: React.ReactType;
  responsiveTag?: React.ReactType;
} & T;

declare class Table<T = {[key: string]: any}> extends React.Component<TableProps<T>> {}
export default Table;
