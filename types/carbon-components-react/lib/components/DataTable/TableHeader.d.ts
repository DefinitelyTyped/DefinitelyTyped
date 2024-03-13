import * as React from "react";
import { ForwardRefReturn, InternationalProps, ReactButtonAttr } from "../../../typings/shared";
import { DataTableSortState, DataTableSortStates } from "./state/sorting";

export type TableHeaderTranslationKey = "carbon.table.header.icon.description";

export interface TableHeaderTranslationArgs {
    header: React.ReactNode;
    isSortHeader: boolean | undefined;
    sortDirection: DataTableSortState | undefined;
    sortStates: DataTableSortStates;
}

export interface TableHeaderProps
    extends
        ReactButtonAttr<HTMLElement>,
        React.ThHTMLAttributes<HTMLElement>,
        InternationalProps<TableHeaderTranslationKey, TableHeaderTranslationArgs>
{
    isSortable?: boolean | undefined;
    isSortHeader?: boolean | undefined;
    sortDirection?: DataTableSortState | undefined;
}

interface TableHeaderFC extends ForwardRefReturn<HTMLTableHeaderCellElement, TableHeaderProps> {
    readonly translationKeys: readonly TableHeaderTranslationKey[];
}

declare const TableHeader: TableHeaderFC;

export default TableHeader;
