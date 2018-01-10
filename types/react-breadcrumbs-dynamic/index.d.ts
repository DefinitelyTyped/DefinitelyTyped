// Type definitions for react-breadcrumbs-dynamic 1.0
// Project: https://github.com/oklas/react-breadcrumbs-dynamic
// Definitions by: mitsuruog <https://github.com/mitsuruog>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export class BreadcrumbsProvider extends React.Component<BreadcrumbsProviderProps> {}

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {}

export class BreadcrumbsItem extends React.Component<BreadcrumbsItemProps> {}

export interface BreadcrumbsProviderProps {
  shouldBreadcrumbsUpdate?: (...args: any[]) => any;
}

export interface BreadcrumbsProps {
  container?: string | Element | {};
  containerProps?: {};
  item?: string | Element | {};
  finalItem?: string | Element | {};
  finalProps?: {};
  separator?: string | Element | {};
  renameProps?: {};
  duplicateProps?: {};
}

export interface BreadcrumbsItemProps {
  to: string;
}
