import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLTableRowElement> { }

export interface TableExpandedRowProps extends InheritedProps {
    colSpan: number,
}

declare const TableExpandedRow: React.FC<TableExpandedRowProps>;

export default TableExpandedRow;
