import * as React from 'react';
import { CSSModule } from '../index';

export type PaginationProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
} & T;

declare class Pagination<T = {}> extends React.Component<PaginationProps<T>> {}
export default Pagination;
