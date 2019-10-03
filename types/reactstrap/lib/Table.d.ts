import * as React from 'react';
import { CSSModule } from '../index';

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    className?: string;
    cssModule?: CSSModule;
    size?: string;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    inverse?: boolean;
    hover?: boolean;
    reflow?: boolean;
    responsive?: boolean;
    tag?: string | React.ReactType;
    responsiveTag?: React.ReactType;
}

declare class Table<T = {[key: string]: any}> extends React.Component<TableProps> {}
export default Table;
