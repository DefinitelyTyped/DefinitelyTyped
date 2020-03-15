// Type definitions for react-bootstrap-table2-toolkit 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { ColumnDescription, BootstrapTableProps } from 'react-bootstrap-table-next';

/**
 * declaration for table toolkit sub module
 */
export interface InjectedSearchProps {
    searchText: string;
    onSearch: (val: string) => void;
    onClear: () => void;
}

export interface SearchMatchProps<T extends object = any> {
    searchText: string;
    value: string;
    column: ColumnDescription<T>;
    row: T;
}

export interface TableSearchProps<T extends object = any> {
    searchFormatted?: boolean;
    defaultSearch?: string;
    placeholder?: string;
    onColumnMatch?: (props: SearchMatchProps<T>) => void;
    customMatchFunc?: (props: SearchMatchProps<T>) => boolean;
}

export interface TableToolkitProps<T extends object = any> {
    bootstrap4?: boolean;
    search?: TableSearchProps<T> | boolean;
    keyField: keyof T | string;
    data: T[];
    ref?: any;
    columns: Array<ColumnDescription<T>>;
    children: (props: { baseProps: BootstrapTableProps<T>; searchProps: InjectedSearchProps }) => JSX.Element;
}

declare function ToolkitProvider(props: TableToolkitProps): JSX.Element;
export default ToolkitProvider;
