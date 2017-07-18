import * as React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

interface BreadcrumbProps extends React.HTMLProps<Breadcrumb> {
  bsClass?: string;
}

export default class Breadcrumb extends React.Component<BreadcrumbProps> {
  public static Item: typeof BreadcrumbItem;
}
