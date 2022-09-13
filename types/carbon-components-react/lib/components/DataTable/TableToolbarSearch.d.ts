import * as React from 'react';
import { InternationalProps } from '../../../typings/shared';
import { SearchProps, SearchSpreadElement } from '../Search';

export type TableToolbarTranslationKey =
    | 'carbon.table.toolbar.search.label'
    | 'carbon.table.toolbar.search.placeholder';

type ExcludedInheritedProps = 'labelText' | 'onBlur' | 'onFocus';

export type TableToolbarSearchHandleExpand = (event: React.FocusEvent<SearchSpreadElement>, newValue?: boolean) => void;

export interface TableToolbarSearchProps
    extends Omit<SearchProps, ExcludedInheritedProps>,
        InternationalProps<TableToolbarTranslationKey> {
    defaultExpanded?: boolean | undefined;
    expanded?: boolean | undefined;
    labelText?: React.ReactNode | undefined;
    onBlur?(event: React.FocusEvent<SearchSpreadElement>, handleExpand: TableToolbarSearchHandleExpand): void;
    onExpand?(event: React.FocusEvent<SearchSpreadElement>, newExpand: boolean): void;
    onFocus?(event: React.FocusEvent<SearchSpreadElement>, handleExpand: TableToolbarSearchHandleExpand): void;
    /**
     * @deprecated
     */
    persistant?: boolean | undefined;
    persistent?: boolean | undefined;
    searchContainerClass?: string | undefined;
}

declare const TableToolbarSearch: React.FC<TableToolbarSearchProps>;

export default TableToolbarSearch;
