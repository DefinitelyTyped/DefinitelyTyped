import * as React from "react";
import { ButtonProps } from "../Button";

interface InheritedProps extends ButtonProps { }

export interface TableBatchActionProps extends InheritedProps { }

declare const TableBatchAction: React.FC<TableBatchActionProps>;

export default TableBatchAction;
