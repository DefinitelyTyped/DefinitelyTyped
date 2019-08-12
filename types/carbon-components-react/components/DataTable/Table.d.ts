import * as React from "react";

interface InheritedProps extends React.TableHTMLAttributes<HTMLTableElement> { }

export interface TableProps extends InheritedProps {
    isSortable?: boolean,
    shouldShowBorder?: boolean,
    size?: "compact" | "normal" | "small" | "tall",
    useStaticWidth?: boolean,
    useZebraStyles?: boolean,
}

declare const Table: React.FC<TableProps>;

export default Table;
