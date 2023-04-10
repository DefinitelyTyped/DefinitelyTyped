// Type definitions for react-bootstrap-table2-toolkit 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { CSSProperties, ReactNode } from 'react';
import { ColumnDescription, SearchProps } from 'react-bootstrap-table-next';

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
    searchFormatted?: boolean | undefined;
    defaultSearch?: string | undefined;
    placeholder?: string | undefined;
    onColumnMatch?: ((props: SearchMatchProps<T>) => void) | undefined;
    customMatchFunc?: ((props: SearchMatchProps<T>) => boolean) | undefined;
    afterSearch?: (newResult: T[]) => void | undefined;
}

export interface CSVProps {
    fileName?: string | undefined;
    separator?: string | undefined;
    ignoreHeader?: boolean | undefined;
    noAutoBOM?: boolean | undefined;
    /**
     * default is text/plain;charset=utf-8
     */
    blobType?: string | undefined;
    exportAll?: boolean | undefined;
    onlyExportSelection?: boolean | undefined;
    onlyExportFiltered?: boolean | undefined;
}

export interface TableToolkitProps<T extends object = any> {
    bootstrap4?: boolean | undefined;
    search?: TableSearchProps<T> | boolean | undefined;
    keyField: keyof T | string;
    data: T[];
    ref?: any;
    columns: Array<ColumnDescription<T>>;
    children: (props: ToolkitContextType) => JSX.Element;
    exportCSV?: boolean | CSVProps | undefined;
    columnToggle?: boolean | undefined;
}

export interface ToolkitContextType {
    searchProps: InjectedSearchProps;
    csvProps: {
        onExport: () => void;
    };
    columnToggleProps: {
        columns: ColumnDescription[];
        /**
         * array of toggled columns
         */
        toggles: boolean[];
        onColumnToggle: (dataField: string) => void;
    };
    baseProps: {
        /**
         * table key field
         */
        keyField: any;
        columns: ColumnDescription[];
        data: any[];
        bootstrap4?: boolean | undefined;
    };
}

export interface ToggleListProps {
    columns: ColumnDescription[];
    /**
     * array of toggled columns
     */
    toggles: boolean[];
    onColumnToggle: (dataField: string) => void;
    btnClassName?: string | undefined;
    className?: string | undefined;
    contextual?: string | undefined;
}

export namespace ColumnToggle {
    function ToggleList(props: ToggleListProps): React.ReactElement | null;
}

export interface ExportCSVButtonProps {
    children: ReactNode;
    onExport: () => void;
    style?: CSSProperties | undefined;
    className?: string | undefined;
}

export namespace CSVExport {
    function ExportCSVButton(props: ExportCSVButtonProps): React.ReactElement | null;
}

export interface SearchBarProps<T = any> extends SearchProps<T> {
    className?: string | undefined;
    style?: CSSProperties | undefined;
    delay?: number | undefined;
    searchText?: string | undefined;
    tableId?: string | undefined;
    ref?: React.RefObject<React.Component<SearchProps<T>>>;
}
export interface ClearSearchButtonProps {
    onClear?: (() => void) | undefined;
    className?: string | undefined;
    text?: string | undefined;
}

export namespace Search {
    function SearchBar(props: SearchBarProps): React.ReactElement | null;
    function ClearSearchButton(props: ClearSearchButtonProps): React.ReactElement | null;
}

export const ToolkitContext: React.Context<ToolkitContextType>;

declare function ToolkitProvider(props: TableToolkitProps): React.ReactElement | null;
export default ToolkitProvider;
