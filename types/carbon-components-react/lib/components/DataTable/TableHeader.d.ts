import * as React from "react";
import { InternationalProps, ReactButtonAttr, ForwardRefReturn } from "../../../typings/shared";
import { DataTableSortState } from "./state/sorting";

export type TableHeaderTranslationKey = "carbon.table.header.icon.description";

export interface TableHeaderProps extends
    ReactButtonAttr<HTMLElement>,
    React.ThHTMLAttributes<HTMLElement>,
    InternationalProps<TableHeaderTranslationKey>
{
    isSortable?: boolean,
    isSortHeader?: boolean,
    sortDirection?: DataTableSortState,
}

interface TableHeaderFC extends ForwardRefReturn<HTMLTableHeaderCellElement, TableHeaderProps> {
    readonly translationKeys: ReadonlyArray<TableHeaderTranslationKey>,
}

declare const TableHeader: TableHeaderFC;

export default TableHeader;
