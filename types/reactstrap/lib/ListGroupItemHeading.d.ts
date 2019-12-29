import * as React from 'react';
import { CSSModule } from '../index';

export interface ListGroupItemHeadingProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class ListGroupItemHeading<T = {[key: string]: any}> extends React.Component<ListGroupItemHeadingProps> {}
export default ListGroupItemHeading;
