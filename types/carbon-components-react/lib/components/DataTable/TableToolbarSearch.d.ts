import * as React from "react";
import { InternationalProps, ReactAttr } from "../../../typings/shared";
import { SearchProps } from "../Search";

type ExcludedAttributes = "aria-hidden" | "labelText" | "small";
export type TableToolbarTranslationKey = "carbon.table.toolbar.search.label" | "carbon.table.toolbar.search.placeholder";
interface InheritedProps extends
    Omit<SearchProps, ExcludedAttributes>,
    InternationalProps<TableToolbarTranslationKey>
{
    labelText?: React.ReactNode,
}

export interface TableToolbarSearchProps extends InheritedProps {
    /**
     * @deprecated
     */
    persistant?: boolean,
    persistent?: boolean,
    searchContainerClasses?: ReactAttr["className"],
}

declare const TableToolbarSearch: React.FC<TableToolbarSearchProps>;

export default TableToolbarSearch;
