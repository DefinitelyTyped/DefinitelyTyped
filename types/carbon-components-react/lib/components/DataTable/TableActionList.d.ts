import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TableActionListProps extends InheritedProps { }

declare const TableActionList: React.FC<TableActionListProps>;

export default TableActionList;
