import * as React from 'react';
import { CSSModule } from '../index';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: string;
  className?: string;
  listTag?: string;
  listClassName?: string;
  cssModule?: CSSModule;
}

declare class Breadcrumb<T = {[key: string]: any}> extends React.Component<BreadcrumbProps> {}
export default Breadcrumb;
