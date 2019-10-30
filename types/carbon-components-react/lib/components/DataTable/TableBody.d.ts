import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLTableSectionElement> { }

export interface TableBodyProps extends InheritedProps { }

declare const TableBody: React.FC<TableBodyProps>;

export default TableBody;
