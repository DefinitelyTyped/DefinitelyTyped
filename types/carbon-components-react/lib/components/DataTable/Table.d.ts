import * as React from "react";

interface InheritedProps extends React.TableHTMLAttributes<HTMLTableElement> { }

export type DataTableSize = "compact" | "lg" | "md" | "normal" | "short" | "sm" | "tall" | "xl" | "xs";

export interface TableCarbonProps {
    isSortable?: boolean | undefined,
    overflowMenuOnHover?: boolean | undefined,
    /**
     * @deprecated
     */
    shouldShowBorder?: boolean | undefined,
    size?: DataTableSize | undefined,
    useStaticWidth?: boolean | undefined,
    useZebraStyles?: boolean | undefined,
}

export interface TableProps extends InheritedProps, TableCarbonProps { }

declare const Table: React.FC<TableProps>;

export default Table;
