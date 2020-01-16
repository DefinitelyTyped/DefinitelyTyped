import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLTableSectionElement> { }

export interface TableHeadProps extends InheritedProps { }

declare const TableHead: React.FC<TableHeadProps>;

export default TableHead;
