import * as React from "react";
import { InternationalProps, ReactDivAttr } from "../../../typings/shared";

export type TableBatchActionsTranslationKey =
    | "carbon.table.batch.cancel"
    | "carbon.table.batch.items.selected"
    | "carbon.table.batch.item.selected";

export interface TableBatchActionsTranslationArgs {
    totalSelected?: number | undefined;
}

export interface TableBatchActionsProps
    extends ReactDivAttr, InternationalProps<TableBatchActionsTranslationKey, TableBatchActionsTranslationArgs>
{
    onCancel(event: React.MouseEvent<HTMLButtonElement>): void;
    shouldShowBatchActions?: boolean | undefined;
    totalSelected: number;
}

interface TableBatchActionsFC extends React.FC<TableBatchActionsProps> {
    readonly translationKeys: readonly TableBatchActionsTranslationKey[];
}

declare const TableBatchActions: TableBatchActionsFC;

export default TableBatchActions;
