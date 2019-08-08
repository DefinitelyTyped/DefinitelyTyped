import * as React from "react";

interface InheritedProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> { }

export interface TableExpandHeaderProps extends InheritedProps { }

declare const TableExpandHeader: React.FC<TableExpandHeaderProps>;

export default TableExpandHeader;
