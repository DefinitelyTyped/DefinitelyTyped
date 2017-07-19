import * as React from 'react';

declare class BreadcrumbItem extends React.Component<BreadcrumbItemProps> { }
declare namespace BreadcrumbItem { }
export = BreadcrumbItem

interface BreadcrumbItemProps extends React.Props<BreadcrumbItem> {
  active?: boolean;
  href?: string;
  title?: React.ReactNode;
  target?: string;
}
