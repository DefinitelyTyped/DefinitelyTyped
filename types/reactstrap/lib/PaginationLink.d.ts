import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type PaginationLinkProps<T = {}> = ReactDOM.HTMLProps<HTMLAnchorElement> & {
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  next?: boolean;
  previous?: boolean;
  tag?: React.ReactType;
} & T;

declare class PaginationLink<T = {[key: string]: any}> extends React.Component<PaginationLinkProps<T>> {}
export default PaginationLink;
