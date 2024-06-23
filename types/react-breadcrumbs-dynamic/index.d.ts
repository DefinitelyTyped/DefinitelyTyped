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
