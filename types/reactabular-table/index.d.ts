import * as React from "react";

export interface Column {
    property?: string | undefined;
    header?: {
        label: string | React.JSX.Element;
        transforms?: ColumnTransform[] | undefined;
        formatters?: ColumnFormatter[] | undefined;
        draggable?: boolean | undefined;
        sortable?: boolean | undefined;
        resizable?: boolean | undefined;
    } | undefined;
    cell?: {
        transforms?: CellTransform[] | undefined;
        formatters?: CellFormatter[] | undefined;
    } | undefined;
    children?: Column[] | undefined;
}

export interface Renderers {
    table?: string | (() => React.JSX.Element) | undefined;
    header?: {
        wrapper?: string | ((props: any) => React.JSX.Element) | ((props: any) => React.ReactInstance) | undefined;
        row?: string | ((props: any) => React.JSX.Element) | ((props: any) => React.ReactInstance) | undefined;
        cell?:
            | string
            | ((props: any, column: Column) => React.JSX.Element)
            | ((props: any) => React.ReactInstance)
            | undefined;
    } | undefined;
    body?: {
        wrapper?: string | ((props: any) => React.JSX.Element) | ((props: any) => React.ReactInstance) | undefined;
        row?:
            | string
            | ((props: any, rowData: any) => React.JSX.Element)
            | ((props: any) => React.ReactInstance)
            | undefined;
        cell?: string | ((props: any) => React.JSX.Element) | ((props: any) => React.ReactInstance) | undefined;
    } | undefined;
}

export type ColumnTransform = (label: string | React.JSX.Element | React.ReactInstance, props: {
    column: Column;
    columnIndex: number;
    property: string;
}) => any;

export type CellTransform = (value: any, props: {
    column: Column;
    columnIndex: number;
    rowData: any;
    rowIndex: number;
    property: string;
}) => any;

export type ColumnFormatter = (label: string | React.JSX.Element, props: {
    rowData: any;
    column: Column;
    columnIndex: number;
}) => string | React.JSX.Element;

export type CellFormatter = (value: any, props: {
    column: Column;
    columnIndex: number;
    rowData: any;
    rowIndex: number;
}) => string | React.JSX.Element;

export interface ProviderProps {
    children?: React.ReactNode;
    columns: Column[];
    className?: string | undefined;
    renderers?: Renderers | undefined;
    style?: Partial<CSSStyleDeclaration> | undefined;
}

export class Provider extends React.Component<ProviderProps> {
}

export interface HeaderProps {
    style?: Partial<CSSStyleDeclaration> | undefined;
    className?: string | undefined;
    headerRows?: Column[] | undefined;
}

export class Header extends React.Component<HeaderProps> {
}

export interface BodyProps {
    rows: any[];
    rowKey: string;
    onRow?: ((row: any, props: { rowIndex: number }) => any) | undefined;
    style?: Partial<CSSStyleDeclaration> | undefined;
    className?: string | undefined;
}

export class Body extends React.Component<BodyProps> {
}
