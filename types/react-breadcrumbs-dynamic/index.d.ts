// Type definitions for react-breadcrumbs-dynamic 1.0
// Project: https://github.com/oklas/react-breadcrumbs-dynamic
// Definitions by: mitsuruog <https://github.com/mitsuruog>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export class BreadcrumbsProvider extends React.Component<BreadcrumbsProviderProps> {}

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {}

export class BreadcrumbsItem extends React.Component<BreadcrumbsItemProps> {}

export interface BreadcrumbsProviderProps {
  children?: React.ReactNode;
  shouldBreadcrumbsUpdate?: ((...args: any[]) => any) | undefined;
}

export interface BreadcrumbsProps {
  container?: string | Element | {} | undefined;
  containerProps?: {} | undefined;
  item?: string | Element | {} | undefined;
  finalItem?: string | Element | {} | undefined;
  finalProps?: {} | undefined;
  separator?: string | Element | {} | undefined;
  renameProps?: {} | undefined;
  duplicateProps?: {} | undefined;
}

export interface BreadcrumbsItemProps {
  children?: React.ReactNode;
  to: string;
}
