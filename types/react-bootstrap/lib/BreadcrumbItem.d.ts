import * as React from 'react';

interface BreadcrumbItemProps extends React.Props<BreadcrumbItem> {
  active?: boolean;
  href?: string;
  title?: React.ReactNode;
  target?: string;
}

export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps> { }
