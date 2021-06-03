import * as React from "react";

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> { }

declare const TableCell: React.FC<TableCellProps>;

export default TableCell;
