// Type definitions for react-table 6.7
// Project: https://github.com/react-tools/react-table#readme
// Definitions by: Christoph Spielmann <https://github.com/spielc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

type AccessorFunc<T> = (v: T) => any;
type CellFunc = (props: any) => JSX.Element;
type PageSizeChangeFunc = (pageSize: number, index: number) => void;

interface Column<T> {
    Header: string;
    accessor: string | AccessorFunc<T>;
    Cell?: string | CellFunc | JSX.Element;
    Footer?: string | CellFunc | JSX.Element;
    width?: number;
    filterable?: boolean;
    sortable?: boolean;
}

interface ReactTableProperties<T> {
    data: T;
    columns: Array<Column<T>>;
    style?: any;
    className?: string;
    page?: number;
    pageSize?: number;
    defaultPageSize?: number;
    onPageSizeChange?: PageSizeChangeFunc;
}

declare class ReactTable<T> extends React.Component<ReactTableProperties<T>> {
}

export = ReactTable;
