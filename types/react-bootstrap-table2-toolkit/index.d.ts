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

export type SearchMartchProps<T extends object = any> = {
    searchText: string;
    value: string;
    column: ColumnDescription<T>;
    row: T;
};

export type TableSearchProps<T extends object = any> = Partial<{
    searchFormatted: boolean;
    defaultSearch: string;
    placeholder: string;
    onColumnMatch: (props: SearchMartchProps<T>) => void;
    customMatchFunc: (props: SearchMartchProps<T>) => boolean;
}>;

export type TableToolkitProps<T extends object = any> = {
    bootstrap4?: boolean;
    search?: TableSearchProps<T> | boolean;
    keyField: keyof T | string;
    data: T[];
    ref?: any;
    columns: ColumnDescription<T>[];
    children: (props: { baseProps: BootstrapTableProps<T>; searchProps: InjectedSearchProps }) => JSX.Element;
};

declare function ToolkitProvider<T extends object = any>(props: TableToolkitProps<T>): JSX.Element;
export default ToolkitProvider;
