import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "title"> { }

export interface TableContainerProps extends InheritedProps {
    description?: React.ReactNode,
    title?: React.ReactNode,
}

declare const TableContainer: React.FC<TableContainerProps>;

export default TableContainer;
