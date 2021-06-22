import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TableContainerProps extends Omit<ReactDivAttr, "title"> {
    description?: React.ReactNode,
    stickyHeader?: boolean,
    title?: React.ReactNode,
}

declare const TableContainer: React.FC<TableContainerProps>;

export default TableContainer;
