import * as React from 'react';

declare namespace BreadcrumbItem {
    export interface BreadcrumbItemProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<BreadcrumbItem> | undefined;
        active?: boolean | undefined;
        href?: string | undefined;
        title?: React.ReactNode | undefined;
        target?: string | undefined;
    }
}
declare class BreadcrumbItem extends React.Component<BreadcrumbItem.BreadcrumbItemProps> { }
export = BreadcrumbItem;
