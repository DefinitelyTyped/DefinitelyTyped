import * as React from "react";

interface InheritedProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> { }

export interface TableCellProps extends InheritedProps { }

declare const TableCell: React.FC<TableCellProps>;

export default TableCell;
