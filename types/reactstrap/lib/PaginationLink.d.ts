import * as React from 'react';
import { CSSModule } from '../index';

export interface PaginationLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    [key: string]: any;
    'aria-label'?: string;
    className?: string;
    cssModule?: CSSModule;
    next?: boolean;
    previous?: boolean;
    first?: boolean;
    last?: boolean;
    tag?: string | React.ReactType;
}

declare class PaginationLink<T = {[key: string]: any}> extends React.Component<PaginationLinkProps> {}
export default PaginationLink;
