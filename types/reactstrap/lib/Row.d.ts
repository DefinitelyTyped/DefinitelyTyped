import * as React from 'react';
import { CSSModule } from '../index';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface RowProps extends Omit<React.HTMLProps<HTMLElement>, 'form'> {
    [key: string]: any;
    className?: string;
    cssModule?: CSSModule;
    tag?: string | React.ReactType;
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
