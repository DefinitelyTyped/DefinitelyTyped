import * as React from 'react';
import { CSSModule } from '../index';

export type PaginationProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  listClassName?: string;
  cssModule?: CSSModule;
  size?: string;
  tag?: React.ReactType;
  listTag?: React.ReactType;
  'aria-label'?: string;
} & T;

declare class Pagination<T = {[key: string]: any}> extends React.Component<PaginationProps<T>> {}
export default Pagination;
