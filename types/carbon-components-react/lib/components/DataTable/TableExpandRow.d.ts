import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableExpandRowProps extends ReactAttr<HTMLTableRowElement> {
    ariaLabel?: string | undefined;
    expandHeader?: string | undefined;
    expandIconDescription?: string | undefined;
    isExpanded?: boolean | undefined;
    onExpand?(event: React.MouseEvent<HTMLButtonElement>): void;
    isSelected?: boolean | undefined;
}

declare const TableExpandRow: React.FC<TableExpandRowProps>;

export default TableExpandRow;
