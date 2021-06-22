import * as React from "react";

export interface TableExpandHeaderProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
    ariaLabel?: string,
    enableExpando?: boolean,
    expandIconDescription?: string,
    isExpanded?: boolean,
    onExpand?(event: React.MouseEvent<HTMLButtonElement>): void;
}

declare const TableExpandHeader: React.FC<TableExpandHeaderProps>;

export default TableExpandHeader;
