import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLTableRowElement> { }

export interface TableRowProps extends InheritedProps { }

declare const TableRow: React.FC<TableRowProps>;

export default TableRow;
