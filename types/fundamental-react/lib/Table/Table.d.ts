import * as React from "react";

export type TableProps = {
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Array of localized text strings for the column headers. */
    headers: Array<string | React.ReactNode>;
    /* Array of objects that contain one property: `rowData` (an array of strings containing data for each column in the row). */
    tableData?: Array<{ rowData: Array<string | React.ReactNode> }>;
    className?: string;
    /* Additional classes to the `<tr>` element within `<thead>`. */
    tableHeaderRowClassName?: string;
    /* Additional classes to be added to the `<thead>` elements. */
    tableHeaderClassName?: string;
    /* Additional classes to be added to the `<tr>` elements. */
    tableRowClassName?: string;
    /* Additional classes to be added to the `<td>` elements. */
    tableCellClassName?: string;
    /* Additional classes to be added to the `<tbody>` element. */
    tableBodyClassName?: string;
    /* Additional props to be spread to the `<tbody>` element. */
    tableBodyProps?: { [x: string]: any };
    /* Additional props to be spread to the `<tr>` elements within `<tbody>`. If using a function, the parameters passed will be an object representing the row (from `tableData`) and the row index. */
    tableBodyRowProps?:
        | { [x: string]: any }
        | ((rowData: string[], index: number) => void);
    /* Additional props to be spread to the `<thead>` element. */
    tableHeaderProps?: { [x: string]: any };
    /* Additional props to be spread to the `<tr>` element within `<thead>`. */
    tableHeaderRowProps?: { [x: string]: any };
} & { [x: string]: any };

declare const Table: React.FunctionComponent<TableProps> & {
    displayName: "Table";
};

export default Table;
