import * as React from "react";

export type TableProps = {
    headers: Array<string | React.ReactNode>;
    tableData?: Array<{ rowData: Array<string | React.ReactNode> }> | undefined;
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    tableBodyClassName?: string | undefined;
    tableBodyProps?: any;
    tableBodyRowProps?: { [x: string]: any } | ((rowData: string[], index: number) => void) | undefined;
    tableCellClassName?: string | undefined;
    tableHeaderClassName?: string | undefined;
    tableHeaderProps?: any;
    tableHeaderRowClassName?: string | undefined;
    tableHeaderRowProps?: any;
    tableRowClassName?: string | undefined;
} & { [x: string]: any };

declare const Table: React.FunctionComponent<TableProps> & {
    displayName: "Table";
};

export default Table;
