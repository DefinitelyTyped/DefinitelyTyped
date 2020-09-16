import * as React from "react";
import { InternationalProps, ReactDivAttr } from "../../../typings/shared";

export type TableBatchActionsTranslationKey = "carbon.table.batch.cancel" | "carbon.table.batch.items.selected" | "carbon.table.batch.item.selected";
interface InheritedProps extends ReactDivAttr, InternationalProps<TableBatchActionsTranslationKey> { }

export interface TableBatchActionsProps extends InheritedProps {
    onCancel(event: React.MouseEvent<HTMLButtonElement>): void,
    shouldShowBatchActions?: boolean,
    totalSelected: number,
}

interface TableBatchActionsFC extends React.FC<TableBatchActionsProps> {
    readonly translationKeys: ReadonlyArray<TableBatchActionsTranslationKey>;
}

declare const TableBatchActions: TableBatchActionsFC;

export default TableBatchActions;
