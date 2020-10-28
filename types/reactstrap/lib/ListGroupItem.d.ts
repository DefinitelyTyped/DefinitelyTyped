import * as React from 'react';
import { CSSModule } from '../index';

export interface ListGroupItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    active?: boolean;
    disabled?: boolean;
    color?: string;
    action?: boolean;
    cssModule?: CSSModule;
    href?: string;
}

declare class ListGroupItem<T = {[key: string]: any}> extends React.Component<ListGroupItemProps> {}
export default ListGroupItem;
