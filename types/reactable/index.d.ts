// Type definitions for reactable 0.14
// Project: https://github.com/abdulrahman-khankan/reactable
// Definitions by: Christoph Spielmann <https://github.com/spielc>, Priscila Moneo <https://github.com/priscila-moneo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface KeyLabelObject {
    key: string;
    label: string;
}

export type ColumnsType = string | KeyLabelObject;

export type SortDirection = 'asc' | 'desc';

export type FilterMethodType = (text: string) => void;

export interface TableComponentProperties<T> {
    data?: T[];
    className?: string;
    columns?: ColumnsType[];
    defaultSort?: { column: string, direction: SortDirection };
    id?: string;
    sortable?: string[] | boolean;
    sortBy?: boolean;
    filterable?: string[];
    filterBy?: string;
    onFilter?: FilterMethodType;
    itemsPerPage?: number;
    noDataText?: string;
    pageButtonLimit?: number;
    currentPage?: number;
    hideFilterInput?: boolean;
}

export interface ThProperties {
    column: string;
    className?: string;
}

export interface TrProperties<T> {
    data?: T;
    className?: string;
}

export interface TdProperties {
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
