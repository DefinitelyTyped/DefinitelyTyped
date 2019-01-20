import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type PaginationProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
} & T;

declare class Pagination<T = {[key: string]: any}> extends React.Component<PaginationProps<T>> {}
export default Pagination;
