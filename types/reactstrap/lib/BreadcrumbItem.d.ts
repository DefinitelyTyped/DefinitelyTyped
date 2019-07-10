import * as React from 'react';
import { CSSModule } from '../index';

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
}

declare class BreadcrumbItem<T = {[key: string]: any}> extends React.Component<BreadcrumbItemProps> {}
export default BreadcrumbItem;
