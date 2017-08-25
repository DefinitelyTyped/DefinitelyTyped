// Type definitions for Hedron 0.7
// Project: https://github.com/JSBros/hedron
// Definitions by: Dmytro Borysov <https://github.com/dborysov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';

export interface ColumnProps {
    tagName?: string;
    debug?: boolean;
    divisions?: number;
    fluid?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsShift?: number;
    smShift?: number;
    mdShift?: number;
    lgShift?: number;
}

export interface PageProps {
    tagName?: string;
    debug?: boolean;
    fluid?: boolean;
    width?: string;
}

export interface RowProps {
    debug?: boolean;
    tagName?: string;
    divisions?: number;
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    justifyContent?: string;
    order?: string;
}

export interface HiddenProps {
    debug?: boolean;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

export interface BreakpointProviderProps {
    breakpoints: { sm?: number; md?: number; lg?: number };
}

export class Column extends React.Component<ColumnProps> {}
export class Page extends React.Component<PageProps> {}
export class Row extends React.Component<RowProps> {}
export class Hidden extends React.Component<HiddenProps> {}
export class BreakpointProvider extends React.Component<BreakpointProviderProps> {}
export function withBreakpoints<T>(
    wrappedComponent: React.ComponentClass<T>
): React.ComponentClass<T>;
