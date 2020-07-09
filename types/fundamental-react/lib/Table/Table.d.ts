import * as React from "react";

export type TableProps = {
    headers: Array<string | React.ReactNode>;
    tableData?: Array<{ rowData: Array<string | React.ReactNode> }>;
    className?: string;
    disableStyles?: boolean;
    tableBodyClassName?: string;
    tableBodyProps?: any;
    tableBodyRowProps?: { [x: string]: any } | ((rowData: string[], index: number) => void);
    tableCellClassName?: string;
    tableHeaderClassName?: string;
    tableHeaderProps?: any;
    tableHeaderRowClassName?: string;
    tableHeaderRowProps?: any;
    tableRowClassName?: string;
} & { [x: string]: any };

declare const Table: React.FunctionComponent<TableProps> & {
    displayName: "Table";
};

export default Table;
