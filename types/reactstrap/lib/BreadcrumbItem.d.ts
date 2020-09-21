import * as React from 'react';
import { CSSModule } from '../index';

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ElementType;
    active?: boolean;
    cssModule?: CSSModule;
    // if a is passed as a string
    // this could be href
    [key: string]: any;
}

declare class BreadcrumbItem<T = {[key: string]: any}> extends React.Component<BreadcrumbItemProps> {}
export default BreadcrumbItem;
