import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type BreadcrumbProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: string;
  className?: string;
  listTag?: string;
  listClassName?: string;
  cssModule?: CSSModule;
} & T;

declare class Breadcrumb<T = {[key: string]: any}> extends React.Component<BreadcrumbProps<T>> {}
export default Breadcrumb;
