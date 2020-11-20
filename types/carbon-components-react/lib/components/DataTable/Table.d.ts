import * as React from "react";

interface InheritedProps extends React.TableHTMLAttributes<HTMLTableElement> { }

export type DataTableSize = "compact" | "normal" | "short" | "tall";

export interface TableCarbonProps {
    isSortable?: boolean,
    overflowMenuOnHover?: boolean,
    shouldShowBorder?: boolean,
    size?: DataTableSize,
    useStaticWidth?: boolean,
    useZebraStyles?: boolean,
}

export interface TableProps extends InheritedProps, TableCarbonProps { }

declare const Table: React.FC<TableProps>;

export default Table;
