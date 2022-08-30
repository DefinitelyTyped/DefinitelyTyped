import * as React from "react";

export interface TableExpandHeaderProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
    ariaLabel?: string | undefined,
    /**
     * @deprecated
     */
    enableExpando?: boolean | undefined,
    enableToggle?: boolean | undefined;
    expandIconDescription?: string | undefined,
    isExpanded?: boolean | undefined,
    onExpand?(event: React.MouseEvent<HTMLButtonElement>): void;
}

declare const TableExpandHeader: React.FC<TableExpandHeaderProps>;

export default TableExpandHeader;
