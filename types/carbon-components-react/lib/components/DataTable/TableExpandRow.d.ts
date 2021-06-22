import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableExpandRowProps extends ReactAttr<HTMLTableRowElement> {
    ariaLabel?: string,
    expandHeader?: string,
    expandIconDescription?: string,
    isExpanded?: boolean,
    onExpand?(event: React.MouseEvent<HTMLButtonElement>): void,
    isSelected?: boolean,
}

declare const TableExpandRow: React.FC<TableExpandRowProps>;

export default TableExpandRow;
