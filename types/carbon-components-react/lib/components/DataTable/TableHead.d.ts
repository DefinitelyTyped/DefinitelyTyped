import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableHeadProps extends ReactAttr<HTMLTableSectionElement> { }

declare const TableHead: React.FC<TableHeadProps>;

export default TableHead;
