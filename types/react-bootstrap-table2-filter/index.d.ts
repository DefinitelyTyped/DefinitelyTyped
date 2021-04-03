// Type definitions for react-bootstrap-table2-filter 1.3
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/gosticks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// documentation taken from https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html

import { TableColumnFilterProps, ColumnDescription } from 'react-bootstrap-table-next';
import { CSSProperties, SyntheticEvent } from 'react';

export enum FILTER_TYPES {
    TEXT = 'TEXT',
    SELECT = 'SELECT',
    MULTISELECT = 'MULTISELECT',
    NUMBER = 'NUMBER',
    DATE = 'DATE',
}

/**
 * Filter comparators used for table filters
 */
export enum Comparator {
    LIKE = 'LIKE',
    EQ = '=',
    NE = '!=',
    GT = '>',
    GE = '>=',
    LT = '<',
    LE = '<=',
}

export type TextFilterProps<T extends object = any> = TableColumnFilterProps<TableColumnFilterProps, T> &
    Partial<{
        /**
         *  default is false, and true will only work when comparator is LIKE
         */
        caseSensitive: boolean;
        comparator: Comparator;
        /**
         * on filter element click event
         */
        onClick?: (e: SyntheticEvent) => void;
    }>;
/**
 * text column filter
 * @param props text filter options
 */
export function textFilter(props?: Partial<TextFilterProps>): TableColumnFilterProps;

/**
 * select filter option type
 */
export type SelectFilterOptions = { [index: string]: string } | Array<{ value: number; label: string }>;

export type SelectFilterProps<T extends object = any> = TableColumnFilterProps<string, T> & {
    options: SelectFilterOptions | ((column: ColumnDescription<T>) => SelectFilterOptions);
    comparator?: Comparator;
    /**
     * When the default unset selection is hidden from dropdown
     */
    withoutEmptyOption?: boolean;
};

/**
 * single select column filter
 * @param props Select filter options
 */
export function selectFilter(props: Partial<SelectFilterProps>): TableColumnFilterProps;

/**
 * Datatype that can be used as the multiselect filter option
 */
export interface MultiSelectFilterOptions {
    [index: string]: string;
}
/**
 * Multi Select filter options
 */
export type MultiSelectFilterProps<T extends object = any> = TableColumnFilterProps<string, T> & {
    options: MultiSelectFilterOptions | (() => MultiSelectFilterOptions);
    comparator?: Comparator;
    /**
     * When set the default selection is hidden from dropdown
     */
    withoutEmptyOption?: boolean;
};

/**
 * multiSelectFilter adds multi select filtering to a column
 * @param props filter options
 */
export function multiSelectFilter(props: Partial<MultiSelectFilterProps>): TableColumnFilterProps;

/**
 * Number filter configuration options
 */
export type NumberFilterProps<T extends object = any> = TableColumnFilterProps<TableColumnFilterProps, T> & {
    options?: number[];
    comparators?: Comparator[];
    /**
     * When set to true comparator dropdown does not show a "no selection" option
     */
    withoutEmptyComparatorOption?: boolean;
    withoutEmptyNumberOption?: boolean;
    comparatorClassName?: string;
    numberClassName?: string;
    comparatorStyle?: CSSProperties;
    numberStyle?: CSSProperties;
    defaultValue?: { number: number; comparator: Comparator };
};

export function numberFilter(props: Partial<NumberFilterProps>): TableColumnFilterProps;

/**
 * Date filter options
 */
export interface DateFilter<T extends object = any> extends TableColumnFilterProps<TableColumnFilterProps, T> {
    withoutEmptyComparatorOption?: boolean;
    defaultValue?: {
        date: Date;
        comparator: Comparator;
    };
    comparators?: Comparator[];
    comparatorClassName?: string;
    dateClassName?: string;
    comparatorStyle?: CSSProperties;
    dateStyle?: CSSProperties;
}

export function dateFilter(props: DateFilter): TableColumnFilterProps;

/**
 * Custom filter
 */
export interface CustomFilterProps {
    type?: string | FILTER_TYPES;
    comparator?: Comparator;
    caseSensitive?: boolean;
}

export function customFilter(props: CustomFilterProps): TableColumnFilterProps;

/**
 * declaration for table filter sub module
 */
export interface FilterFactoryProps<T extends object = any> {
    // TODO newFilters is not tested not its type is validated since the author of this commit has no experience with this field
    afterFilter?: (newResult: T[], newFilters?: unknown[]) => void;
}

declare function filterFactory(props?: FilterFactoryProps): unknown;
export default filterFactory;
