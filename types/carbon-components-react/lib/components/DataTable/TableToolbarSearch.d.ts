import * as React from "react";
import { InternationalProps } from "../../../typings/shared";
import { SearchProps } from "../Search";

export type TableToolbarTranslationKey = "carbon.table.toolbar.search.label" | "carbon.table.toolbar.search.placeholder";

export interface TableToolbarSearchProps extends Omit<SearchProps, "labelText">, InternationalProps<TableToolbarTranslationKey> {
    defaultExpanded?: boolean,
    expanded?: boolean,
    labelText?: React.ReactNode,
    onExpand?(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>, newExpand: boolean): void;
    /**
     * @deprecated
     */
    persistant?: boolean,
    persistent?: boolean,
    searchContainerClass?: string,
}

declare const TableToolbarSearch: React.FC<TableToolbarSearchProps>;

export default TableToolbarSearch;
