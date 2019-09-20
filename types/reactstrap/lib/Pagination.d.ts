import * as React from 'react';
import { CSSModule } from '../index';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  className?: string;
  listClassName?: string;
  cssModule?: CSSModule;
  size?: string;
  tag?: React.ReactType;
  listTag?: React.ReactType;
  'aria-label'?: string;
}

declare class Pagination<T = {[key: string]: any}> extends React.Component<PaginationProps> {}
export default Pagination;
