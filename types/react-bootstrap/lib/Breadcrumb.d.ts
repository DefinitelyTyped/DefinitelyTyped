import * as React from 'react';
import * as BreadcrumbItem from './BreadcrumbItem';

declare class Breadcrumb extends React.Component<BreadcrumbProps> {
  public static Item: typeof BreadcrumbItem;
}
declare namespace Breadcrumb { }
export = Breadcrumb

interface BreadcrumbProps extends React.HTMLProps<Breadcrumb> {
  bsClass?: string;
}
