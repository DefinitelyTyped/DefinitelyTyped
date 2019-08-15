import * as React from 'react';
import { CSSModule } from '../index';

export interface RowProps extends React.HTMLProps<HTMLElement> {
  [key: string]: any;
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  noGutters?: boolean;
}

declare class Row<T = {[key: string]: any}> extends React.Component<RowProps> {}
export default Row;
