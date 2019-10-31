import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TableToolbarContentProps extends InheritedProps { }

declare const TableToolbarContent: React.FC<TableToolbarContentProps>;

export default TableToolbarContent;
