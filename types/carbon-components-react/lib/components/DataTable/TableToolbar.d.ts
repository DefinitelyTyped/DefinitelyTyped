import { ReactAttr } from "../../../typings/shared";
import * as React from "react";

export interface TableToolbarProps extends ReactAttr {
    size?: "normal" | "small",
}

declare const TableToolbar: React.FC<TableToolbarProps>;

export default TableToolbar;
