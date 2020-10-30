import * as React from 'react';
import { CSSModule } from '../index';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    [key: string]: any;
    cssModule?: CSSModule;
    size?: string;
    bordered?: boolean;
    borderless?: boolean;
    striped?: boolean;
    inverse?: boolean;
    hover?: boolean;
    reflow?: boolean;
    responsive?: boolean | string;
    tag?: React.ElementType;
    responsiveTag?: React.ElementType;
}

declare class Table<T = {[key: string]: any}> extends React.Component<TableProps> {}
export default Table;
