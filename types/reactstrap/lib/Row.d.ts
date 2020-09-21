import * as React from 'react';
import { CSSModule } from '../index';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface RowProps extends Omit<React.HTMLAttributes<HTMLElement>, 'form'> {
    [key: string]: any;
    cssModule?: CSSModule;
    tag?: React.ElementType;
    noGutters?: boolean;
    form?: boolean;
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
}

declare class Row<T = {[key: string]: any}> extends React.Component<RowProps> {}
export default Row;
