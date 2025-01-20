import * as React from "react";

export interface KeyLabelObject {
    key: string;
    label: string;
}

export type ColumnsType = string | KeyLabelObject;

export type SortDirection = "asc" | "desc";

export type FilterMethodType = (text: string) => void;

export interface TableComponentProperties<T> {
    children?: React.ReactNode;
    data?: T[] | undefined;
    className?: string | undefined;
    columns?: ColumnsType[] | undefined;
    defaultSort?: { column: string; direction: SortDirection } | undefined;
    id?: string | undefined;
    sortable?: string[] | boolean | undefined;
    sortBy?: boolean | undefined;
    filterable?: string[] | undefined;
    filterBy?: string | undefined;
    onFilter?: FilterMethodType | undefined;
    itemsPerPage?: number | undefined;
    noDataText?: string | undefined;
    pageButtonLimit?: number | undefined;
    currentPage?: number | undefined;
    hideFilterInput?: boolean | undefined;
}

export interface ThProperties {
    children?: React.ReactNode;
    column: string;
    className?: string | undefined;
}

export interface TrProperties<T> {
    children?: React.ReactNode;
    data?: T | undefined;
    className?: string | undefined;
}

export interface TdProperties {
    children?: React.ReactNode;
    column: string;
    value?: any;
    data?: any;
}

export class Table<T> extends React.Component<TableComponentProperties<T>> {
}

export class Thead extends React.Component {
}

export class Th extends React.Component<ThProperties> {
}

export class Tr<T> extends React.Component<TrProperties<T>> {
}

export class Td extends React.Component<TdProperties> {
}

export class Tfoot extends React.Component {
}
