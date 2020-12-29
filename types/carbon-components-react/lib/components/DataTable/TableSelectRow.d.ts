import * as React from "react";

export interface TableSelectRowProps {
    ariaLabel?: string,
    checked: boolean,
    className?: string,
    disabled?: boolean,
    id: string,
    name: string,
    onSelect(event: React.MouseEvent<HTMLInputElement>): void,
    radio?: boolean,
}

declare const TableSelectRow: React.FC<TableSelectRowProps>;

export default TableSelectRow;
