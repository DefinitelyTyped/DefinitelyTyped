// Type definitions for react-bootstrap-table2-filter 1.3
// Project: https://github.com/react-bootstrap-table/react-bootstrap-table2#readme
// Definitions by: Wlad Meixner <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { TableColumnFilterProps, ColumnDescription } from 'react-bootstrap-table-next';
import { CSSProperties } from 'react';

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
    }>;
/**
 * text filter utility method
 * @param props
 */
export function textFiler(props: Partial<TextFilterProps>): TableColumnFilterProps;

/**
 * select filter option type
 */
export type SelectFilterOptions = { [index: string]: string } | { value: number; label: string }[];

export type SelectFilterProps<T extends object = any> = TableColumnFilterProps<string, T> & {
    options: SelectFilterOptions | ((column: ColumnDescription<T>) => SelectFilterOptions);
    comparator?: Comparator;
    /**
     * When the default unset selection is hidden from dropdown
     */
    withoutEmptyOption?: boolean;
};

export type MultiselectFilterOptions = { [index: string]: string };

export type MultiselectFilterProps = {
    options: MultiselectFilterOptions | (() => MultiselectFilterOptions);
    comparator?: Comparator;
    /**
     * When the default unset selection is hidden from dropdown
     */
    withoutEmptyOption?: boolean;
};

export type NumberFilterProps<T extends object = any> = TableColumnFilterProps<TableColumnFilterProps, T> & {
    options?: number[];
    comparators?: Array<Comparator>;
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
export function selectFilter(props: Partial<SelectFilterProps>): TableColumnFilterProps;

/**
 * declaration for table filter sub module
 */
declare function filterFactory(): unknown;
export default filterFactory;
