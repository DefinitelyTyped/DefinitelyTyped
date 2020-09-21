import * as React from 'react';
import { CSSModule } from '../index';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    listClassName?: string;
    cssModule?: CSSModule;
    size?: string;
    tag?: React.ElementType;
    listTag?: React.ElementType;
    'aria-label'?: string;
}

declare class Pagination<T = {[key: string]: any}> extends React.Component<PaginationProps> {}
export default Pagination;
