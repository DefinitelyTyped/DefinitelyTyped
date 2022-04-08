import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableBodyProps extends ReactAttr<HTMLTableSectionElement> { }

declare const TableBody: React.FC<TableBodyProps>;

export default TableBody;
