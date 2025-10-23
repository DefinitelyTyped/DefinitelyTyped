import React = require("react");
import { ReactAttr } from "../../../typings/shared";

export interface TableExpandedRowProps extends ReactAttr<HTMLTableRowElement> {
    colSpan: number;
}

declare const TableExpandedRow: React.FC<TableExpandedRowProps>;

export default TableExpandedRow;
