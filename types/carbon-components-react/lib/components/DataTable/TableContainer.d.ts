import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export interface TableContainerProps extends Omit<ReactDivAttr, "title"> {
    description?: React.ReactNode | undefined,
    stickyHeader?: boolean | undefined,
    useStaticWidth?: boolean | undefined,
    title?: React.ReactNode | undefined,
}

declare const TableContainer: React.FC<TableContainerProps>;

export default TableContainer;
