// Type definitions for reactable 0.14
// Project: https://github.com/glittershark/reactable
// Definitions by: Christoph Spielmann <https://github.com/spielc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export interface KeyLabelObject {
    key: string;
    label: string;
}

export type ColumnsType = string | KeyLabelObject;

export type FilterMethodType = (text: string) => void;

export interface TableComponentProperties<T> {
    data?: T[];
    className?: string;
    columns?: ColumnsType[];
    id?: string;
    sortable?: string[];
    filterable?: string[];
    filterBy?: string;
    onFilter?: FilterMethodType;
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
