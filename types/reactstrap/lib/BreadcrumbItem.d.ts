import * as React from 'react';
import { CSSModule } from '../index';

export type BreadcrumbItemProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
} & T;

declare class BreadcrumbItem<T = {}> extends React.Component<BreadcrumbItemProps<T>> {}
export default BreadcrumbItem;
