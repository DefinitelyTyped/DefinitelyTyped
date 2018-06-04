import * as React from 'react';
import { CSSModule } from '../index';

export type RowProps<T = {}> = React.HTMLProps<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  noGutters?: boolean;
} & T;

declare class Row<T = {[key: string]: any}> extends React.Component<RowProps<T>> {}
export default Row;
