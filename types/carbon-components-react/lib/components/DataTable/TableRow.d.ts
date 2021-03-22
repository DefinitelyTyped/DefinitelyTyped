import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableRowProps extends ReactAttr<HTMLTableRowElement> {
    isSelected?: boolean,
}

declare const TableRow: React.FC<TableRowProps>;

export default TableRow;
