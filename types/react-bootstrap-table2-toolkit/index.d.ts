// Type definitions for react-bootstrap-table2-toolkit 2.1
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { CSSProperties, ReactNode } from 'react';
import { ColumnDescription } from 'react-bootstrap-table-next';

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

export interface CSVProps {
    fileName?: string;
    separator?: string;
    ignoreHeader?: boolean;
    noAutoBOM?: boolean;
    /**
     * default is text/plain;charset=utf-8
     */
    blobType?: string;
    exportAll?: boolean;
    onlyExportSelection?: boolean;
    onlyExportFiltered?: boolean;
}

export interface TableToolkitProps<T extends object = any> {
    bootstrap4?: boolean;
    search?: TableSearchProps<T> | boolean;
    keyField: keyof T | string;
    data: T[];
    ref?: any;
    columns: Array<ColumnDescription<T>>;
    children: (props: ToolkitContextType) => JSX.Element;
    exportCSV?: boolean | CSVProps;
    columnToggle?: boolean;
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
        bootstrap4?: boolean;
    };
}

export interface ToggleListProps {
    columns: ColumnDescription[];
    /**
     * array of toggled columns
     */
    toggles: boolean[];
    onColumnToggle: (dataField: string) => void;
    btnClassName?: string;
    className?: string;
    contextual?: string;
}

export namespace ColumnToggle {
    function ToggleList(props: ToggleListProps): React.ReactElement | null;
}

export interface ExportCSVButtonProps {
    children: ReactNode;
    onExport: () => void;
    style?: CSSProperties;
    className?: string;
}

export namespace CSVExport {
    function ExportCSVButton(props: ExportCSVButtonProps): React.ReactElement | null;
}

export interface SearchBarProps {
    onSearch: (searchText: string) => void;
    className?: string;
    placeholder?: string;
    style?: CSSProperties;
    delay?: number;
    searchText?: string;
    tableId?: string;
}
export interface ClearSearchButtonProps {
    onClear?: () => void;
    className?: string;
    text?: string;
}

export namespace Search {
    function SearchBar(props: SearchBarProps): React.ReactElement | null;
    function ClearSearchButton(props: ClearSearchButtonProps): React.ReactElement | null;
}

export const ToolkitContext: React.Context<ToolkitContextType>;

declare function ToolkitProvider(props: TableToolkitProps): React.ReactElement | null;
export default ToolkitProvider;
