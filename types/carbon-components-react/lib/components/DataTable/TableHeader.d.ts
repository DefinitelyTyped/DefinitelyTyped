import * as React from "react";
import { InternationalProps, ReactButtonAttr } from "../../../typings/shared";
import { DataTableSortState } from './state/sorting';

export type TableHeaderTranslationKey = "carbon.table.header.icon.description";
interface InheritedProps extends
    ReactButtonAttr,
    InternationalProps<TableHeaderTranslationKey>
{
    scope?: React.ThHTMLAttributes<any>["scope"],
}

export interface TableHeaderProps extends InheritedProps {
    isSortable?: boolean,
    isSortHeader?: boolean,
    sortDirection?: DataTableSortState,
}

interface TableHeaderFC extends React.FC<TableHeaderProps> {
    readonly translationKeys: ReadonlyArray<TableHeaderTranslationKey>,
}

declare const TableHeader: TableHeaderFC;

export default TableHeader;
