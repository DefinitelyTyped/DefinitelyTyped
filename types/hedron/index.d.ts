// Type definitions for Hedron 0.7
// Project: https://github.com/JSBros/hedron
// Definitions by: Dmytro Borysov <https://github.com/dborysov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';

export interface ColumnProps {
    /**
     * You can specify component to use specific tag
     * @default 'div'
     */
    tagName?: keyof ElementTagNameMap;
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;
    /**
     * The amount of horizontal columns this row creates.
     * @default 12
     */
    divisions?: number;
    /**
     * If true, disable padding.
     */
    fluid?: boolean;
    /**
     * Width during xs breakpoint.
     */
    xs?: number;
    /**
     * Width during sm breakpoint.
     */
    sm?: number;
    /**
     * Width during md breakpoint.
     */
    md?: number;
    /**
     * Width during lg breakpoint.
     */
    lg?: number;
    /**
     * Width of left margin during xs breakpoint.
     */
    xsShift?: number;
    /**
     * Width of left margin during sm breakpoint.
     */
    smShift?: number;
    /**
     * Width of left margin during md breakpoint.
     */
    mdShift?: number;
    /**
     * Width of left margin during lg breakpoint.
     */
    lgShift?: number;
}

export interface PageProps {
    /**
     * You can specify component to use specific tag
     * @default 'div'
     */
    tagName?: keyof ElementTagNameMap;
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;
    /**
     * Enabling fluid mode disables the fixed width of the Page
     */
    fluid?: boolean;
    /**
     * If not using fluid, set a custom width for the page.
     */
    width?: string;
}

export interface RowProps {
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid.
     * @default false
     */
    debug?: boolean;
    /**
     * You can specify component to use specific tag
     * @default 'section'
     */
    tagName?: keyof ElementTagNameMap;
    /**
     * The amount of horizontal columns this row creates.
     * @default 12
     */
    divisions?: number;
    /**
     * Sets the value of the CSS align-content property
     */
    alignContent?: string;
    /**
     * Sets the value of the CSS align-items property
     */
    alignItems?: string;
    /**
     * Sets the value of the CSS align-self property
     */
    alignSelf?: string;
    /**
     * Sets the value of the CSS justify-content property
     */
    justifyContent?: string;
    /**
     * Sets the value of the CSS order property
     */
    order?: string;
}

export interface HiddenProps {
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;
    /**
     * Width during xs breakpoint.
     */
    xs?: boolean;
    /**
     * Width during sm breakpoint.
     */
    sm?: boolean;
    /**
     * Width during md breakpoint.
     */
    md?: boolean;
    /**
     * Width during lg breakpoint.
     */
    lg?: boolean;
}

export interface BreakpointProviderProps {
    breakpoints: { sm?: number; md?: number; lg?: number };
}

export class Column extends React.Component<ColumnProps & React.HTMLProps<HTMLElement>> {}
export class Page extends React.Component<PageProps & React.HTMLProps<HTMLElement>> {}
export class Row extends React.Component<RowProps & React.HTMLProps<HTMLElement>> {}
export class Hidden extends React.Component<HiddenProps & React.HTMLProps<HTMLElement>> {}
export class BreakpointProvider extends React.Component<
    BreakpointProviderProps & React.HTMLProps<HTMLElement>
> {}
export function withBreakpoints<T>(
    wrappedComponent: React.ComponentClass<T>
): React.ComponentClass<T>;
