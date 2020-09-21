import * as React from 'react';
import { CSSModule } from '../index';

export interface PaginationItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    cssModule?: CSSModule;
    active?: boolean;
    disabled?: boolean;
    tag?: React.ElementType;
}

declare class PaginationItem<T = {[key: string]: any}> extends React.Component<PaginationItemProps> {}
export default PaginationItem;
