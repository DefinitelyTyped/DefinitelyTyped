import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as BreadcrumbItem from './BreadcrumbItem';

declare namespace Breadcrumb {
    interface BreadcrumbProps extends ReactDOM.HTMLProps<Breadcrumb> {
        bsClass?: string;
    }
}
declare class Breadcrumb extends React.Component<Breadcrumb.BreadcrumbProps> {
    public static Item: typeof BreadcrumbItem;
}
export = Breadcrumb;
