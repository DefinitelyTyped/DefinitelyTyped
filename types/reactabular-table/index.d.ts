// Type definitions for reactabular-table 8.14
// Project: http://reactabular.js.org/
// Definitions by: Marcos Junior <https://github.com/junalmeida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from "react";

export interface Column {
    property?: string;
    header?: {
        label: string | JSX.Element;
        transforms?: ColumnTransform[];
        formatters?: ColumnFormatter[];
        draggable?: boolean;
        sortable?: boolean;
        resizable?: boolean;
    };
    cell?: {
        transforms?: CellTransform[];
        formatters?: CellFormatter[];
    };
    children?: Column[];
}

export interface Renderers {
    table?: string | (() => JSX.Element);
    header?: {
        wrapper?: string | ((props: any) => JSX.Element) | ((props: any) => React.ReactInstance);
        row?: string | ((props: any) => JSX.Element) | ((props: any) => React.ReactInstance);
        cell?: string | ((props: any, column: Column) => JSX.Element) | ((props: any) => React.ReactInstance);
    };
    body?: {
        wrapper?: string | ((props: any) => JSX.Element) | ((props: any) => React.ReactInstance);
        row?: string | ((props: any, rowData: any) => JSX.Element) | ((props: any) => React.ReactInstance);
        cell?: string | ((props: any) => JSX.Element) | ((props: any) => React.ReactInstance);
    };
}

export type ColumnTransform = (label: string | JSX.Element | React.ReactInstance, props: {
    column: Column,
    columnIndex: number,
    property: string
}) => any;

export type CellTransform = (value: any, props: {
    column: Column,
    columnIndex: number,
    rowData: any,
    rowIndex: number,
    property: string
}) => any;

export type ColumnFormatter = (label: string | JSX.Element, props: {
    rowData: any,
    column: Column,
    columnIndex: number,
}) => string | JSX.Element;

export type CellFormatter = (value: any, props: {
    column: Column,
    columnIndex: number,
    rowData: any,
    rowIndex: number,
}) => string | JSX.Element;

export interface ProviderProps {
    columns: Column[];
    className?: string;
    renderers?: Renderers;
    style?: Partial<CSSStyleDeclaration>;
}

export class Provider extends React.Component<ProviderProps> {
}

export interface HeaderProps {
    style?: Partial<CSSStyleDeclaration>;
    className?: string;
    headerRows?: Column[];
}

export class Header extends React.Component<HeaderProps> {
}

export interface BodyProps {
    rows: any[];
    rowKey: string;
    onRow?: (row: any, props: { rowIndex: number }) => any;
    style?: Partial<CSSStyleDeclaration>;
    className?: string;
}

export class Body extends React.Component<BodyProps> {
}
