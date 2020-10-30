import * as React from 'react';
import { CSSModule } from '../index';

export interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    flush?: boolean;
    horizontal?: boolean | string;
    cssModule?: CSSModule;
}

declare class ListGroup<T = {[key: string]: any}> extends React.Component<ListGroupProps> {}
export default ListGroup;
